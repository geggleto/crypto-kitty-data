<template>
    <div class="container">
        <h1 class="title">Cattribute Prices</h1>
        <h1 class="subtitle">Updated Daily</h1>

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

    export default {
        name : 'cattributePrices',
        data() {

            return {
                cattributes : [],
                filter : ''
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
            }
        }
    }
</script>

<style>

</style>