<template>
    <div class="container">
        <h1 class="title">Cattribute Prices</h1>
        <h1 class="subtitle">Updated Daily</h1>

        <div class="priceCharts"></div>

        {{ generateCattributeGraphs() }}

        <nav class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <input class="input" type="text" placeholder="Cattribute" v-model="filter">
                </div>
            </div>
        </nav>

        <table class="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                    <th>Cattribute</th>
                    <th>Gen</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="attribute in filterKittyRow()">
                    <td>{{ attribute.cattribute }}</td>
                    <td>{{ attribute.generation }}</td>
                    <td>{{ attribute.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';


    const CATTRIBUTE_PRICE_API = 'https://dna.cryptokittydata.info/cattribute/prices/'

    // NOTE: this is probably not the best way to do this...
    class CryptoKittyPriceChart {
        constructor(height, width) {
            this.margin = {top: 20, right: 100, bottom: 30, left: 50};
            this.height = height - this.margin.top - this.margin.bottom;
            this.width = width - this.margin.left - this.margin.right;

            this.parseTime = d3.timeFormat("%Y-%m-%d");
            this.colorScheme = d3.schemeCategory10;

            this.xScalar = d3.scaleTime().range([0, this.width]);
            this.yScalar = d3.scaleLinear().range([this.height, 0]);
            this.zScalar = d3.scaleOrdinal(this.colorScheme);

            this.valueline = d3.line()
                .curve(d3.curveBasis)
                .x( d => this.xScalar(d.date))
                .y( d => this.yScalar(d.price));
        }

        generateNewGraph(classname) {
            //console.log(`generateNewGraph: ${classname}`)
            var translation = `translate(${this.margin.left},${this.margin.top})`;

            this.gen0_svg = d3.select(`.${classname}`).append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", translation);

            this.gen1_5_svg = d3.select(`.${classname}`).append("svg")
                .attr("width", this.width + this.margin.left + this.margin.right)
                .attr("height", this.height + this.margin.top + this.margin.bottom);

            this.g = this.gen1_5_svg.append("g").attr("transform", translation);
        }

        getCattributePrices(cattribute) {
            // need to stash these for AJAX response
            var gen0_svg = this.gen0_svg;
            var gen1_5_svg = this.gen1_5_svg;
            var g =

            axios.get(`${CATTRIBUTE_PRICE_API}${cattribute}`)
                .then(response => {

                    // split data into 2 datasets (gen0, gen1-5)
                    var groups = [[],{1: [], 2: [], 3: [], 4: [], 5:[]}];
                    response.data.forEach(function(d) {
                        // format data (this might not be necessary for output's sake)
                        d.date = new Date(d.date);
                        d.generation = parseInt(d.generation);
                        d.price = parseFloat(d.price)

                        if (d.generation == 0) {
                            groups[0].push(d);
                        } else {
                            // TODO: consider no init and just add keys as found...
                            groups[1][d.generation].push(d);
                        }
                    });

                    // TODO: isn't there a better way to do this...
                    var restruct = [];
                    for (var key in groups[1]) restruct.push(groups[1][key]);
                    groups[1] = restruct;

                    // Scale the range of the data
                    //var extent = d3.extent(groups[0], d => d.date);
                    this.xScalar.domain(d3.extent(groups[0], d => d.date));
                    var ymax = d3.max(groups[0], d => d.price);
                    this.yScalar.domain([0, 1.1*ymax]);

                    // Add the X Axis
                    this.gen0_svg.append("g").attr("transform", "translate(0," + this.height + ")").call(d3.axisBottom(this.xScalar))
                        .append("text").attr("transform", "rotate(-90)").attr("x", this.height-10).attr("dy", "1em").attr("fill", "#000").attr("class", "label").text("ETH");

                    // Add the Y Axis
                    this.gen0_svg.append("g").call(d3.axisLeft(this.yScalar));

                    this.gen0_svg.append("text").attr("x", this.width/2).text(cattribute).attr("class", "label");

                    // Add the valueline path.
                    this.gen0_svg.append("path").data([groups[0]]).attr("class", "line").attr("d", this.valueline).attr("fill", "none");

                    // Add legend
                    this.gen0_svg.append("g")
                        .attr("class", "legendOrdinal")
                        .attr("transform", `translate(${this.width+15},20)`);

                    var legendOrdinal = d3.legendColor()
                        .scale(this.zScalar.domain([0]))
                        //.labels(d => `Gen ${d.generatedLabels[d.i]}`); // TODO: ugh?!?
                        .labels( ["Gen 0"])

                    this.gen0_svg.select(".legendOrdinal")
                        .call(legendOrdinal);

                    // Scale the range of the data
                    // NOTE: assuming all have same date range

                    //var xdomain = d3.extent(groups[1][1], function(d) { return d.date; });
                    //var xmax = xdomain[1];
                    this.xScalar.domain(d3.extent(groups[1][1], d => d.date));

                    ymax = d3.max(groups[1], g => d3.max(g, d => d.price));
                    this.yScalar.domain([0, 1.1*ymax]);

                    this.zScalar.domain(Object.keys(groups[1]));

                    // Add the X Axis
                    this.g.append("g").attr("transform", "translate(0," + this.height + ")").call(d3.axisBottom(this.xScalar))
                        .append("text").attr("transform", "rotate(-90)").attr("x", this.height-10).attr("dy", "1em").attr("fill", "#000").text("ETH");

                    // Add the Y Axis
                    this.g.append("g").call(d3.axisLeft(this.yScalar));

                    this.g.append("text").attr("x", this.width/2).attr("class", "label").text(cattribute);

                    var gens = this.g.selectAll(".gen")
                        .data(groups[1])
                        .enter().append("g")
                        .attr("class", "gen");

                    gens.append("path").attr("class", "line").attr("d", d => this.valueline(d)).style("stroke", d => this.zScalar(d[0].generation-1)).attr("fill", "none");

                    // Add legend
                    this.g.append("g")
                        .attr("class", "legendOrdinal")
                        .attr("transform", `translate(${this.width+15},20)`);

                    legendOrdinal = d3.legendColor()
                        .scale(this.zScalar.domain([1,2,3,4,5]))
                        //.labels(d => `Gen ${d.generatedLabels[d.i]}`); // TODO: ugh?!?
                        .labels( ["Gen 1", "Gen 2", "Gen 3", "Gen 4", "Gen 5"])

                    this.g.select(".legendOrdinal")
                        .call(legendOrdinal);
                });
        }
    }

    export default {
        name : 'cattributePrices',
        data() {

            return {
                cattributes : [],
                filter : '',
                //ckPriceChart : new CryptoKittyPriceChart(500,500)
            };
        },
        created() {
            axios.get('https://dna.cryptokittydata.info/cattribute/prices')
                .then(response => {
                    this.cattributes = response.data;
                });
        },
        methods: {

            filterKittyRow() {
                if (this.filter === '') {
                    return this.cattributes;
                } else {
                    return this.cattributes.filter(cattribute => {
                        return cattribute.cattribute.indexOf(this.filter) >= 0;
                    });
                }
            },

            listCattributes() {
                // TODO: consider storing
                return this.cattributes.map( el => el.cattribute).filter( (elem, index, self) => index == self.indexOf(elem));
            },

            generateCattributeGraphs() {
                for (let cattribute of this.listCattributes()) {
                    console.log(cattribute)
                    let ckPriceChart = new CryptoKittyPriceChart(500,500);
                    ckPriceChart.generateNewGraph("priceCharts");
                    ckPriceChart.getCattributePrices(cattribute);
                }
            }

        }
    }

</script>

<style>

</style>