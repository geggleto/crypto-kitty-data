<template>
    <div class="container">
        <h1 class="title">Mewtation Jewel Search</h1>

        <nav class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <div class="field is-grouped">
                        <div class="control">
                            <input class="input" id="cattribute" placeholder="Cattribute" type="text" v-model="cattribute" v-on:click="setupAutoComplete">
                        </div>
                        <div class="control">
                            <a class="button is-link" v-on:click="search" v-bind:class="{ 'is-loading' : isSearching  }">Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <table class="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                    <th>Kitty Id</th>
                    <th>Position</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="attribute in results">
                    <td><a v-bind:href="getLink(attribute.id)" target="_blank">{{ attribute.id }}</a></td>
                    <td>{{ attribute.position }}</td>
                    <td>{{ attribute.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name : 'MewtationSearch',
        data() {

            return {
                results : [],
                cattribute : '',
                cattributes : [],
                isSearching : false
            };
        },
        created() {
            axios.get('https://api.cryptokitties.co/cattributes')
                .then(response => {
                    for (let i in response.data) {
                        this.cattributes = response.data
                            .map(item => { return item.description; })
                            .filter(item => { return item !== 'totesbasic'; });
                    }
                })
        },
        methods: {
            search() {
                this.isSearching = true;
                axios.post('https://dna.cryptokittydata.info/search/mewtation', { cattribute : this.cattribute })
                    .then(response => {
                        this.results = response.data;
                        this.isSearching = false;
                    });
            },
            setupAutoComplete() {
                $("#cattribute").autocomplete({
                    source: this.cattributes,
                    select: (event, ui) => {
                        this.cattribute = ui.item.value;
                    }
                });
            },
            getLink(id) {
                return 'https://www.cryptokitties.co/kitty/' + id;
            },
        }
    }
</script>

<style>

</style>