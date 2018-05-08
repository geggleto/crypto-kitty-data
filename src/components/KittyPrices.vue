<template>
    <div class="container">
        <h1 class="title">Kitty Evaluator Beta</h1>
        <h1 class="subtitle">Updated Daily - Evaluates Gen 0,1,2,3,4,5 Kitties</h1>

        <div class="columns">
            <div class="column is-2">
                <input class="input" type="text" placeholder="KittyId" v-model="kittyId">
                <a class="button is-primary" v-on:click="evaluateKitty">Evaluate</a>
                <br />
                <div class="content has-text-weight-bold">{{ value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name : 'cattributePrices',
        data() {

            return {
                cattributes : [],
                kittyId : '',
                generation : -1,
                value : ''
            };
        },
        created() {
            axios.get('https://dna.cryptokittydata.info/cattribute/prices')
                .then(response => {
                    this.cattributes = response.data;
                });
        },
        methods: {
            evaluateKitty()
            {
                this.value = '?';
                axios.get('https://api.cryptokitties.co/kitties/'+this.kittyId)
                    .then(response => {
                        this.generation = response.data.generation;

                        if (this.generation > 5) {
                            this.value = 'Kitty needs to be gen 5 or under for evaluation';
                            return [];
                        }

                        return response.data.enhanced_cattributes;
                    })
                    .then(cattributes => {
                        let values = [];

                        for (let i in cattributes) {
                            let cattribute = cattributes[i].description;

                            let value = this.cattributes.filter(item => {
                                return item.generation == this.generation && item.cattribute == cattribute;
                            });

                            if (value[0]) {
                                values.push(value[0].price);
                            }
                        }

                        if (values.length > 0) {
                            values.sort(function (a, b) {
                                return b - a;
                            });

                            this.value = values[0];
                        }
                    });
            }
        }
    }
</script>

<style>

</style>