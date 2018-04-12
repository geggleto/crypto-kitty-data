<template>
    <section class="section">
        <div class="container">
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <h1 class="title">DNA Dashboard</h1>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-success tooltip" data-tooltip="Click here to copy this profile link" v-on:click="copyToClipboard">Copy Link</a>
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
            <table class="table is-bordered is-striped is-narrow is-hoverable ">
                <thead>
                <tr>
                    <th colspan="6"><a v-bind:href="getUrl()">Download CSV</a></th>

                    <th colspan="4" class="cattribute-border-left">Fur</th>

                    <th colspan="4" class="cattribute-border-left">Pattern</th>

                    <th colspan="4" class="cattribute-border-left">Eye-Color</th>

                    <th colspan="4" class="cattribute-border-left">Eye-Type</th>

                    <th colspan="4"  class="cattribute-border-left">Base-Color</th>

                    <th colspan="4"  class="cattribute-border-left">HighLi-Col</th>

                    <th colspan="4" class="cattribute-border-left">Accent-Col</th>

                    <th colspan="4"  class="cattribute-border-left">Wild</th>

                    <th colspan="4" class="cattribute-border-left">Mouth</th>
                </tr>
                <tr>
                    <th><a class="button is-small is-primary" v-on:click="sortIdProfile">ID</a></th>
                    <th><a class="button is-small is-primary" v-on:click="sortGenProfile">Gen</a></th>
                    <th>Name</th>
                    <th><a class="button is-small is-primary" v-on:click="sortPriceProfile">Price</a></th>
                    <th>Cooldown</th>
                    <th>Ready</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="fur">R1</th>
                    <th class="fur">R2</th>
                    <th class="fur">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="pattern">R1</th>
                    <th class="pattern">R2</th>
                    <th class="pattern">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="eyecolor">R1</th>
                    <th class="eyecolor">R2</th>
                    <th class="eyecolor">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="eyeshape">R1</th>
                    <th class="eyeshape">R2</th>
                    <th class="eyeshape">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="basecolor">R1</th>
                    <th class="basecolor">R2</th>
                    <th class="basecolor">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="highlightcolor">R1</th>
                    <th class="highlightcolor">R2</th>
                    <th class="highlightcolor">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="accentcolor">R1</th>
                    <th class="accentcolor">R2</th>
                    <th class="accentcolor">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="wild">R1</th>
                    <th class="wild">R2</th>
                    <th class="wild">R3</th>

                    <th class="cattribute-border-left">D0</th>
                    <th class="mouth">R1</th>
                    <th class="mouth">R2</th>
                    <th class="mouth">R3</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="kitty in profileKitties">
                    <td><a v-bind:href="getLink(kitty.id)" target="_blank">{{ kitty.id }}</a></td>
                    <td>{{ kitty.generation }}</td>
                    <td>{{ kitty.name }}</td>
                    <td>{{ fromWei(kitty.auction.current_price).substr(0,6) }}</td>
                    <td>{{ kitty.status.cooldown_index }}</td>
                    <td>{{ kitty.status.is_ready }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['body']['D0']">{{ kittyDna[kitty.id]['body']['D0'] }}</td>
                    <td class="fur" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R1']">{{ kittyDna[kitty.id]['body']['R1'] }}</td>
                    <td class="fur" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R2']">{{ kittyDna[kitty.id]['body']['R2'] }}</td>
                    <td class="fur" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['body']['R3'] ">{{ kittyDna[kitty.id]['body']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['D0'] ">{{ kittyDna[kitty.id]['pattern']['D0'] }}</td>
                    <td class="pattern" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R1']">{{ kittyDna[kitty.id]['pattern']['R1'] }}</td>
                    <td class="pattern" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R2']">{{ kittyDna[kitty.id]['pattern']['R2'] }}</td>
                    <td class="pattern" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['pattern']['R3']">{{ kittyDna[kitty.id]['pattern']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['D0'] ">{{ kittyDna[kitty.id]['eyecolor']['D0'] }}</td>
                    <td class="eyecolor" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R1'] ">{{ kittyDna[kitty.id]['eyecolor']['R1'] }}</td>
                    <td class="eyecolor" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R2'] ">{{ kittyDna[kitty.id]['eyecolor']['R2'] }}</td>
                    <td class="eyecolor" v-if="kittyDna[kitty.id] && kittyDna[kitty.id]['eyecolor']['R3'] ">{{ kittyDna[kitty.id]['eyecolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['D0'] }}</td>
                    <td class="eyeshape" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R1'] }}</td>
                    <td class="eyeshape" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R2'] }}</td>
                    <td class="eyeshape" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['eyetype']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['D0'] }}</td>
                    <td class="basecolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R1'] }}</td>
                    <td class="basecolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R2'] }}</td>
                    <td class="basecolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['bodycolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['D0'] }}</td>
                    <td class="highlightcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R1'] }}</td>
                    <td class="highlightcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R2'] }}</td>
                    <td class="highlightcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['patterncolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['D0'] }}</td>
                    <td class="accentcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R1'] }}</td>
                    <td class="accentcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R2'] }}</td>
                    <td class="accentcolor" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['secondarycolor']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['D0'] }}</td>
                    <td class="wild" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R1'] }}</td>
                    <td class="wild" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R2'] }}</td>
                    <td class="wild" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['wild']['R3'] }}</td>

                    <td class="cattribute-border-left" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['D0'] }}</td>
                    <td class="mouth" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R1'] }}</td>
                    <td class="mouth" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R2'] }}</td>
                    <td class="mouth" v-if="kittyDna[kitty.id]">{{ kittyDna[kitty.id]['mouth']['R3'] }}</td>
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

            this.loadProfile();
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
                return 'http://dna.cryptokittydata.info/dna/profile/'+this.uiProfile+'/csv';
            },
            loadProfile() {
                this.profileKitties = [];
                store.loadOtherCKProfile(this.uiProfile, 0);
            },
            loadKittyClock() {
                this.uiProfile = '0x06012c8cf97bead5deae237070f9587f8e7a266d';
                this.loadProfile();
            },
            resetProfile() {
                this.uiProfile = this.profile;
                this.loadProfile();
            },
            shareableUrl() {
                return 'http://cryptokittydata.info/#/?profile='+this.uiProfile;
            },
            copyToClipboard() {
                let content = this.shareableUrl();

                let textArea = document.createElement("textarea");
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    let successful = document.execCommand('copy');
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }

                document.body.removeChild(textArea);
            }
        }
    }
</script>

<style>
    html {
        overflow: auto !important;
    }

    .cattribute-border-left {
        border-left: #0a0a0a solid 1px;
    }
    .cattribute-border-right {
        border-left: #0a0a0a solid 1px;
    }
</style>