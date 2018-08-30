<template>
    <div class="container">
        <h1 class="title">Kitty DNA Read</h1>
        <nav class="level">
            <!-- Left side -->
            <div class="level-left">
                <div class="level-item">
                    <div class="field is-grouped">
                        <div class="control">
                            <input class="input" placeholder="Kitty Id" type="text" v-model="kittyId">
                        </div>
                        <div class="control">
                            <a class="button is-link" v-on:click="search" v-bind:class="{ 'is-loading' : isSearching  }">Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="columns is-multiline">
            <div class="column is-4">
            <table class="table is-bordered is-striped is-narrow is-hoverable ">
                <tr>
                    <th colspan="4" class="th-bg">Fur</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th class="fur">R1</th>
                    <th class="fur">R2</th>
                    <th class="fur">R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['body']['D0'] }}</td>
                    <td class="fur">{{ kitty['body']['R1'] }}</td>
                    <td class="fur">{{ kitty['body']['R2'] }}</td>
                    <td class="fur">{{ kitty['body']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Pattern</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['pattern']['D0'] }}</td>
                    <td>{{ kitty['pattern']['R1'] }}</td>
                    <td>{{ kitty['pattern']['R2'] }}</td>
                    <td>{{ kitty['pattern']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Eye-Color</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['eyecolor']['D0'] }}</td>
                    <td>{{ kitty['eyecolor']['R1'] }}</td>
                    <td>{{ kitty['eyecolor']['R2'] }}</td>
                    <td>{{ kitty['eyecolor']['R3'] }}</td>
                </tr>
                <tr>
                    <th colspan="4"  class="th-bg">Eye-Shape</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['eyetype']['D0'] }}</td>
                    <td>{{ kitty['eyetype']['R1'] }}</td>
                    <td>{{ kitty['eyetype']['R2'] }}</td>
                    <td>{{ kitty['eyetype']['R3'] }}</td>
                </tr>
            </table>
            </div>
            <div class="column is-4">
                <table class="table is-bordered is-striped is-narrow is-hoverable ">
                <tr>
                    <th colspan="4"  class="th-bg">Body Color</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['bodycolor']['D0'] }}</td>
                    <td>{{ kitty['bodycolor']['R1'] }}</td>
                    <td>{{ kitty['bodycolor']['R2'] }}</td>
                    <td>{{ kitty['bodycolor']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Highlight Color</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['patterncolor']['D0'] }}</td>
                    <td>{{ kitty['patterncolor']['R1'] }}</td>
                    <td>{{ kitty['patterncolor']['R2'] }}</td>
                    <td>{{ kitty['patterncolor']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Accent Color</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['secondarycolor']['D0'] }}</td>
                    <td>{{ kitty['secondarycolor']['R1'] }}</td>
                    <td>{{ kitty['secondarycolor']['R2'] }}</td>
                    <td>{{ kitty['secondarycolor']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Wild</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['wild']['D0'] }}</td>
                    <td>{{ kitty['wild']['R1'] }}</td>
                    <td>{{ kitty['wild']['R2'] }}</td>
                    <td>{{ kitty['wild']['R3'] }}</td>
                </tr>
                </table>
            </div>
            <div class="column is-4">
                <table class="table is-bordered is-striped is-narrow is-hoverable ">
                <tr>
                    <th colspan="4" class="th-bg" >Mouth</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['mouth']['D0'] }}</td>
                    <td>{{ kitty['mouth']['R1'] }}</td>
                    <td>{{ kitty['mouth']['R2'] }}</td>
                    <td>{{ kitty['mouth']['R3'] }}</td>
                </tr>


                <tr>
                    <th colspan="4"  class="th-bg">Environment</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['mystery']['D0'] }}</td>
                    <td>{{ kitty['mystery']['R1'] }}</td>
                    <td>{{ kitty['mystery']['R2'] }}</td>
                    <td>{{ kitty['mystery']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4" class="th-bg" >Secret</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['secret']['D0'] }}</td>
                    <td>{{ kitty['secret']['R1'] }}</td>
                    <td>{{ kitty['secret']['R2'] }}</td>
                    <td>{{ kitty['secret']['R3'] }}</td>
                </tr>

                <tr>
                    <th colspan="4"  class="th-bg">Unknown</th>
                </tr>
                <tr>
                    <th >D0</th>
                    <th>R1</th>
                    <th>R2</th>
                    <th>R3</th>
                </tr>
                <tr v-for="kitty in kitties" v-bind:key="kitty.id">
                    <td >{{ kitty['unknown']['D0'] }}</td>
                    <td>{{ kitty['unknown']['R1'] }}</td>
                    <td>{{ kitty['unknown']['R2'] }}</td>
                    <td>{{ kitty['unknown']['R3'] }}</td>
                </tr>
            </table>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        created() {
            this.kittyId = this.$route.params.kittyId;

            if (this.kittyId > 0) {
                this.search();
            }
        },
        data() {

            return {
                kittyId : 0,
                isSearching : false,
                kitties : []
            }
        },
        methods : {

            search() {
                if (this.kittyId > 0) {
                    this.$router.push('/kitty/' + this.kittyId);
                    this.isSearching = true;
                    return this.getKittyDna(this.kittyId);
                }

            },
            getKittyDna(id) {
                this.kitties = [];

                return axios.post('https://dna.cryptokittydata.info/fetch/dna',
                    {
                        kitties : [ { id : id} ]
                    }
                ).then( (response) => {
                    this.kitties = [];

                    for (let i in response.data) {
                        this.kitties.push(response.data[i]);
                    }

                    this.isSearching = false;
                }).catch( () => {
                    this.isSearching = false;
                })
            },
            getLink(id) {
                return 'https://www.cryptokitties.co/kitty/' + id;
            },
        },
        watch : {
            '$route' (to, from) {
                this.kittyId = this.$route.params.kittyId;
                this.search();
            }
        }
    }
</script>

<style>
    .th-bg {
        background-color: lightgrey;
    }
</style>