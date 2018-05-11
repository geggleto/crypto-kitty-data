<template>
    <section class="section">
        <div class="container">
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <h1 class="title">DNA Dashboard (Pro) BETA)</h1>
                    </div>
                </div>
            </nav>


            <!-- Main container -->
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle">
                            <strong>{{ profileKitties.length }}</strong> Kitties Loaded!
                        </p>
                    </div>

                </div>

                <!-- Right side -->
                <div class="level-right">
                    <div class="level-item">
                        <div class="field has-addons">
                            <div class="control">
                                <input class="input" type="text" v-model="uiProfile">
                            </div>
                            <div class="control">
                                <a class="button is-success" v-on:click="loadProfile" v-bind:class="{'is-loading' : loading}">
                                    Load
                                </a>
                                <a class="button is-warning" v-on:click="loadKittyClock" v-bind:class="{'is-loading' : loading}">
                                    KittyClock
                                </a>
                                <a class="button is-danger" v-on:click="resetProfile" v-bind:class="{'is-loading' : loading}">
                                    Reset
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <input class="input" type="text" placeholder="Filter" v-model="filter">
                    </div>
                </div>
                <div cllass="level-right">
                    <div class="buttons level-item">
                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : furColumn }"
                                v-on:click="furColumn = !furColumn">Fur</a>
                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : patternColumn }"
                                v-on:click="patternColumn = !patternColumn">Pattern</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : eyeColorColumn }"
                                v-on:click="eyeColorColumn = !eyeColorColumn">Eye-Color</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : eyeShapeColumn }"
                                v-on:click="eyeShapeColumn = !eyeShapeColumn">Eye-Type</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : bodyColorColumn }"
                                v-on:click="bodyColorColumn = !bodyColorColumn">Base-Color</a>
                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : hilightColorColumn }"
                                v-on:click="hilightColorColumn = !hilightColorColumn">HighLi-Col</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : accentColorColumn }"
                                v-on:click="accentColorColumn = !accentColorColumn">Accent-Col</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : wildColumn }"
                                v-on:click="wildColumn = !wildColumn">Wild</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : mouthColumn }"
                                v-on:click="mouthColumn = !mouthColumn">Mouth</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : mysteryColumn }"
                                v-on:click="mysteryColumn = !mysteryColumn">Mystery</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : secretColumn }"
                                v-on:click="secretColumn = !secretColumn">Secret</a>

                        <a
                                class="button"
                                v-bind:class="{ 'is-dark' : unknownColumn }"
                                v-on:click="unknownColumn = !unknownColumn">Unknown</a>
                    </div>
                </div>
            </nav>


            <table class="table is-bordered is-striped is-narrow is-hoverable ">
                <thead>
                <tr>
                    <th colspan="1"><a v-bind:href="getUrl()">Download CSV</a></th>

                    <th colspan="4" class="cattribute-border-left" v-if="!furColumn" >Fur</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!patternColumn" >Pattern</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!eyeColorColumn" >Eye-Color</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!eyeShapeColumn" >Eye-Type</th>

                    <th colspan="4"  class="cattribute-border-left" v-if="!bodyColorColumn" >Base-Color</th>

                    <th colspan="4"  class="cattribute-border-left" v-if="!hilightColorColumn" >HighLi-Col</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!accentColorColumn" >Accent-Col</th>

                    <th colspan="4"  class="cattribute-border-left" v-if="!wildColumn" >Wild</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!mouthColumn" >Mouth</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!mysteryColumn" >Mystery</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!secretColumn" >Secret</th>

                    <th colspan="4" class="cattribute-border-left" v-if="!unknownColumn" >Unknown</th>
                </tr>
                <tr>
                    <th><a class="button is-small is-primary" v-on:click="sortIdProfile">ID</a></th>

                    <th class="cattribute-border-left" v-if="!furColumn">D0</th>
                    <th class="fur" v-if="!furColumn">R1</th>
                    <th class="fur" v-if="!furColumn">R2</th>
                    <th class="fur" v-if="!furColumn">R3</th>

                    <th v-if="!patternColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!patternColumn" class="pattern">R1</th>
                    <th v-if="!patternColumn" class="pattern">R2</th>
                    <th v-if="!patternColumn" class="pattern">R3</th>

                    <th v-if="!eyeColorColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!eyeColorColumn" class="eyecolor">R1</th>
                    <th v-if="!eyeColorColumn" class="eyecolor">R2</th>
                    <th v-if="!eyeColorColumn" class="eyecolor">R3</th>

                    <th v-if="!eyeShapeColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!eyeShapeColumn" class="eyeshape">R1</th>
                    <th v-if="!eyeShapeColumn" class="eyeshape">R2</th>
                    <th v-if="!eyeShapeColumn" class="eyeshape">R3</th>

                    <th v-if="!bodyColorColumn"  class="cattribute-border-left">D0</th>
                    <th v-if="!bodyColorColumn"  class="basecolor">R1</th>
                    <th v-if="!bodyColorColumn"  class="basecolor">R2</th>
                    <th v-if="!bodyColorColumn"  class="basecolor">R3</th>

                    <th v-if="!hilightColorColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!hilightColorColumn" class="highlightcolor">R1</th>
                    <th v-if="!hilightColorColumn" class="highlightcolor">R2</th>
                    <th v-if="!hilightColorColumn" class="highlightcolor">R3</th>

                    <th v-if="!accentColorColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!accentColorColumn" class="accentcolor">R1</th>
                    <th v-if="!accentColorColumn" class="accentcolor">R2</th>
                    <th v-if="!accentColorColumn" class="accentcolor">R3</th>

                    <th v-if="!wildColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!wildColumn" class="wild">R1</th>
                    <th v-if="!wildColumn" class="wild">R2</th>
                    <th v-if="!wildColumn" class="wild">R3</th>

                    <th v-if="!mouthColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!mouthColumn" class="mouth">R1</th>
                    <th v-if="!mouthColumn" class="mouth">R2</th>
                    <th v-if="!mouthColumn" class="mouth">R3</th>

                    <th v-if="!mysteryColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!mysteryColumn" class="mouth">R1</th>
                    <th v-if="!mysteryColumn" class="mouth">R2</th>
                    <th v-if="!mysteryColumn" class="mouth">R3</th>

                    <th v-if="!secretColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!secretColumn" class="mouth">R1</th>
                    <th v-if="!secretColumn" class="mouth">R2</th>
                    <th v-if="!secretColumn" class="mouth">R3</th>

                    <th v-if="!unknownColumn" class="cattribute-border-left">D0</th>
                    <th v-if="!unknownColumn" class="mouth">R1</th>
                    <th v-if="!unknownColumn" class="mouth">R2</th>
                    <th v-if="!unknownColumn" class="mouth">R3</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="kitty in filterKittyRow()">
                    <td><a v-bind:href="getLink(kitty.id)" target="_blank">{{ kitty.id }}</a></td>

                    <td class="cattribute-border-left" v-if="!furColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['body']['D0']">{{ kittyDna[kitty.id]['body']['D0'] }}</td>
                    <td class="fur" v-if="!furColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R1']">{{ kittyDna[kitty.id]['body']['R1'] }}</td>
                    <td class="fur" v-if="!furColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R2']">{{ kittyDna[kitty.id]['body']['R2'] }}</td>
                    <td class="fur" v-if="!furColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R3'] ">{{ kittyDna[kitty.id]['body']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!patternColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['D0'] ">{{ kittyDna[kitty.id]['pattern']['D0'] }}</td>
                    <td class="pattern" v-if="!patternColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R1']">{{ kittyDna[kitty.id]['pattern']['R1'] }}</td>
                    <td class="pattern" v-if="!patternColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R2']">{{ kittyDna[kitty.id]['pattern']['R2'] }}</td>
                    <td class="pattern" v-if="!patternColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R3']">{{ kittyDna[kitty.id]['pattern']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!eyeColorColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['D0'] ">{{ kittyDna[kitty.id]['eyecolor']['D0'] }}</td>
                    <td class="eyecolor" v-if="!eyeColorColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R1'] ">{{ kittyDna[kitty.id]['eyecolor']['R1'] }}</td>
                    <td class="eyecolor" v-if="!eyeColorColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R2'] ">{{ kittyDna[kitty.id]['eyecolor']['R2'] }}</td>
                    <td class="eyecolor" v-if="!eyeColorColumn && kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R3'] ">{{ kittyDna[kitty.id]['eyecolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!eyeShapeColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['D0'] }}</td>
                    <td class="eyeshape" v-if="!eyeShapeColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R1'] }}</td>
                    <td class="eyeshape" v-if="!eyeShapeColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R2'] }}</td>
                    <td class="eyeshape" v-if="!eyeShapeColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!bodyColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['D0'] }}</td>
                    <td class="basecolor" v-if="!bodyColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R1'] }}</td>
                    <td class="basecolor" v-if="!bodyColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R2'] }}</td>
                    <td class="basecolor" v-if="!bodyColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!hilightColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['D0'] }}</td>
                    <td class="highlightcolor" v-if="!hilightColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R1'] }}</td>
                    <td class="highlightcolor" v-if="!hilightColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R2'] }}</td>
                    <td class="highlightcolor" v-if="!hilightColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!accentColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['D0'] }}</td>
                    <td class="accentcolor" v-if="!accentColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R1'] }}</td>
                    <td class="accentcolor" v-if="!accentColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R2'] }}</td>
                    <td class="accentcolor" v-if="!accentColorColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!wildColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['D0'] }}</td>
                    <td class="wild" v-if="!wildColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R1'] }}</td>
                    <td class="wild" v-if="!wildColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R2'] }}</td>
                    <td class="wild" v-if="!wildColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!mouthColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['D0'] }}</td>
                    <td class="mouth" v-if="!mouthColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R1'] }}</td>
                    <td class="mouth" v-if="!mouthColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R2'] }}</td>
                    <td class="mouth" v-if="!mouthColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!mysteryColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mystery']['D0'] }}</td>
                    <td class="mouth" v-if="!mysteryColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mystery']['R1'] }}</td>
                    <td class="mouth" v-if="!mysteryColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mystery']['R2'] }}</td>
                    <td class="mouth" v-if="!mysteryColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mystery']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!secretColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secret']['D0'] }}</td>
                    <td class="mouth" v-if="!secretColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secret']['R1'] }}</td>
                    <td class="mouth" v-if="!secretColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secret']['R2'] }}</td>
                    <td class="mouth" v-if="!secretColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secret']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="!unknownColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['unknown']['D0'] }}</td>
                    <td class="mouth" v-if="!unknownColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['unknown']['R1'] }}</td>
                    <td class="mouth" v-if="!unknownColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['unknown']['R2'] }}</td>
                    <td class="mouth" v-if="!unknownColumn && kittyDna[kitty.id]">{{ kittyDna[kitty.id]['unknown']['R3'] }}</td>

                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import store from './../store';


    export default {
        name: 'dnaDashboard',

        data() {
            let state = store.state;

            state.genSort = true;
            state.price = false;
            state.idSort = true;
            state.uiProfile = state.profile;

            return state;
        },
        created() {
            //If there's a query Parameter, we want to load that uiProfile.
            let uiProfile = this.getParameterByName('profile');

            if (uiProfile && uiProfile !== '') {
                this.uiProfile = uiProfile;
            } else {
                this.uiProfile = this.profile;
            }

            //this.loadProfile();
        },
        methods : {
            fromWei(price) {
                return web3.fromWei(price, 'ether');
            },
            getParameterByName(name) {
                let url = window.location.href;

                name = name.replace(/[\[\]]/g, "\\$&");

                let  regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);

                if (!results)
                    return null;
                if (!results[2])
                    return '';

                return decodeURIComponent(results[2].replace(/\+/g, " "));
            },
            getLink(id) {
                return 'https://www.cryptokitties.co/kitty/'+id;
            },
            sortGenProfile() {
                if (this.genSort) {
                    this.profileKitties.sort(this.sortProfileByGenDown);
                } else {
                    this.profileKitties.sort(this.sortProfileByGenUp);
                }

                this.genSort = !this.genSort;
            },
            sortIdProfile() {
                if (this.idSort) {
                    this.profileKitties.sort(this.sortProfileByIdDown);
                } else {
                    this.profileKitties.sort(this.sortProfileByIdUp);
                }

                this.idSort = !this.idSort;
            },
            sortPriceProfile() {
                if (this.price) {
                    this.profileKitties.sort(this.sortProfileByPriceUp);
                } else {
                    this.profileKitties.sort(this.sortProfileByPriceDown);
                }

                this.price = !this.price;
            },
            sortProfileByGenUp(a, b) {
                if (a.generation > b.generation) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByGenDown(a, b) {
                if (a.generation < b.generation) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByPriceUp(a, b) {
                if (this.fromWei(a.auction.current_price).substr(0,6) > this.fromWei(b.auction.current_price).substr(0,6)) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByPriceDown(a, b) {
                if (this.fromWei(a.auction.current_price).substr(0,6) < this.fromWei(b.auction.current_price).substr(0,6)) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByIdUp(a, b) {
                if (a.id > b.id) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByIdDown(a, b) {
                if (a.id < b.id) {
                    return -1;
                } else {
                    return 1;
                }
            },
            getUrl() {
                return 'https://dna.cryptokittydata.info/dna/profile/'+this.uiProfile+'/csv';
            },
            loadProfile() {
                this.profileKitties = [];
                store.loadProMemberCkProfile(this.uiProfile);
            },
            loadKittyClock() {
                this.uiProfile = '0x06012c8cf97bead5deae237070f9587f8e7a266d';
                this.loadProfile();
            },
            resetProfile() {
                this.uiProfile = this.profile;
                this.loadProfile();
            },
            filterKittyRow() {
                if (this.filter === '') {
                    return this.profileKitties;
                } else {
                    return this.profileKitties.filter(kitty => {
                        let dna = this.kittyDna[kitty.id];

                        return JSON.stringify(dna).indexOf(this.filter) >= 0;
                    });
                }
            },
            kaiToDec(kai) {
                if (kai === "1") {
                    return 0;
                } else if (kai === "2") {
                    return 1;
                } else if (kai === "3") {
                    return 2;
                } else if (kai === "4") {
                    return 3;
                } else if (kai === "5") {
                    return 4;
                } else if (kai === "6") {
                    return 5;
                } else if (kai === "7") {
                    return 6;
                } else if (kai === "8") {
                    return 7;
                } else if (kai === "9") {
                    return 8;
                } else if (kai === "a") {
                    return 9;
                } else if (kai === "b") {
                    return 10;
                } else if (kai === "c") {
                    return 11;
                } else if (kai === "d") {
                    return 12;
                } else if (kai === "e") {
                    return 13;
                } else if (kai === "f") {
                    return 14;
                } else if (kai === "g") {
                    return 15;
                } else if (kai === "h") {
                    return 16;
                } else if (kai === "i") {
                    return 17;
                } else if (kai === "j") {
                    return 18;
                } else if (kai === "k") {
                    return 19;
                } else if (kai === "m") {
                    return 20;
                } else if (kai === "n") {
                    return 21;
                } else if (kai === "o") {
                    return 22;
                } else if (kai === "q") {
                    return 23;
                } else if (kai === "p") {
                    return 24;
                } else if (kai === "r") {
                    return 25;
                } else if (kai === "s") {
                    return 26;
                } else if (kai === "t") {
                    return 27;
                } else if (kai === "u") {
                    return 28;
                } else if (kai === "v") {
                    return 29;
                } else if (kai === "w") {
                    return 30;
                } else if (kai === "x") {
                    return 31;
                }

                return -1;
            }
        }
    }
</script>

<style>
    html {
        overflow: auto !important;
    }
</style>