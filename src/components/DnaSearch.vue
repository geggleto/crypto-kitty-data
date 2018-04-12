<template>
    <div class="container">
        <h1 class="title">DNA Search</h1>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Cattribute</label>
                    <div class="control">
                        <input class="input" id="cattribute" type="text" v-model="cattribute" v-on:click="setupAutoComplete">
                    </div>
                </div>
                <div class="field">
                    <label class="checkbox">
                        <input type="checkbox" v-model="d0">
                        D0
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" v-model="r1">
                        R1
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" v-model="r2">
                        R2
                    </label>
                    <label class="checkbox">
                        <input type="checkbox" v-model="r3">
                        R3
                    </label>
                    <div class="is-pulled-right">
                        <a class="button is-link" v-on:click="addParam">Add</a>
                    </div>
                </div>

            </div>
            <div class="column is-2">
                <div class="field">
                    <label class="label">Generation</label>
                    <div class="control">
                        <input class="input" type="text" v-model="gen">
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <a class="button is-link" v-on:click="addGen(gen)">Add Generation</a>
                    </div>
                </div>
            </div>
            <div class="column is-2">
                <div class="field">
                    <label class="label">Page</label>
                    <div class="control">
                        <input class="input" type="text" v-model="offset">
                    </div>
                </div>
                <div class="field">
                    <label class="label">
                        Count: {{ count }} / 500
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Query</label>
                    <div class="control">
                        <input class="input" type="text" v-model="queryString">
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <a class="button is-link" v-on:click="search" v-bind:class="{ 'is-loading' : isSearching  }">Search</a>
                    </div>
                </div>
            </div>

        </div>
        <!-- Main container -->
        <table class="table is-bordered is-striped is-narrow is-hoverable ">
            <thead>
            <tr>
                <th colspan="3"></th>

                <th colspan="4" class="cattribute-border-left">Fur</th>

                <th colspan="4" class="cattribute-border-left">Pattern</th>

                <th colspan="4" class="cattribute-border-left">Eye-Color</th>

                <th colspan="4" class="cattribute-border-left">Eye-Type</th>

                <th colspan="4" class="cattribute-border-left">Base-Color</th>

                <th colspan="4" class="cattribute-border-left">HighLi-Col</th>

                <th colspan="4" class="cattribute-border-left">Accent-Col</th>

                <th colspan="4" class="cattribute-border-left">Wild</th>

                <th colspan="4" class="cattribute-border-left">Mouth</th>
            </tr>
            <tr>
                <th><a class="button is-small is-primary" v-on:click="sortIdProfile">ID</a></th>
                <th><a class="button is-small is-primary" v-on:click="sortGenProfile">Gen</a></th>
                <th><a class="button is-small is-primary" v-on:click="sortPriceProfile">Price</a></th>

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
            <tr v-for="kitty, id in searchDna">
                <td><a v-bind:href="getLink(id)" target="_blank">{{ id }}</a></td>
                <td>{{ kitty.gen }}</td>
                <td>{{ kitty.sale }}</td>

                <td class="cattribute-border-left">{{ kitty['body']['D0'] }}</td>
                <td class="fur">{{ kitty['body']['R1'] }}</td>
                <td class="fur">{{ kitty['body']['R2'] }}</td>
                <td class="fur">{{ kitty['body']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['pattern']['D0'] }}</td>
                <td class="pattern">{{ kitty['pattern']['R1'] }}</td>
                <td class="pattern">{{ kitty['pattern']['R2'] }}</td>
                <td class="pattern">{{ kitty['pattern']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['eyecolor']['D0'] }}</td>
                <td class="eyecolor">{{ kitty['eyecolor']['R1'] }}</td>
                <td class="eyecolor">{{ kitty['eyecolor']['R2'] }}</td>
                <td class="eyecolor">{{ kitty['eyecolor']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['eyetype']['D0'] }}</td>
                <td class="eyeshape">{{ kitty['eyetype']['R1'] }}</td>
                <td class="eyeshape">{{ kitty['eyetype']['R2'] }}</td>
                <td class="eyeshape">{{ kitty['eyetype']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['bodycolor']['D0'] }}</td>
                <td class="basecolor">{{ kitty['bodycolor']['R1'] }}</td>
                <td class="basecolor">{{ kitty['bodycolor']['R2'] }}</td>
                <td class="basecolor">{{ kitty['bodycolor']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['patterncolor']['D0'] }}</td>
                <td class="highlightcolor">{{ kitty['patterncolor']['R1'] }}</td>
                <td class="highlightcolor">{{ kitty['patterncolor']['R2'] }}</td>
                <td class="highlightcolor">{{ kitty['patterncolor']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['secondarycolor']['D0'] }}</td>
                <td class="accentcolor">{{ kitty['secondarycolor']['R1'] }}</td>
                <td class="accentcolor">{{ kitty['secondarycolor']['R2'] }}</td>
                <td class="accentcolor">{{ kitty['secondarycolor']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['wild']['D0'] }}</td>
                <td class="wild">{{ kitty['wild']['R1'] }}</td>
                <td class="wild">{{ kitty['wild']['R2'] }}</td>
                <td class="wild">{{ kitty['wild']['R3'] }}</td>

                <td class="cattribute-border-left">{{ kitty['mouth']['D0'] }}</td>
                <td class="mouth">{{ kitty['mouth']['R1'] }}</td>
                <td class="mouth">{{ kitty['mouth']['R2'] }}</td>
                <td class="mouth">{{ kitty['mouth']['R3'] }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import qs from 'qs';
    import axios from 'axios';

    export default {
        name: 'dnaDashboard',

        data() {
            let state = {};

            state.isSearching = false;
            state.genSort = true;
            state.price = false;
            state.idSort = true;

            state.searchResults = [];
            state.searchDna = [];

            state.cattribute = '';
            state.queryString = 'onsale=true';
            state.gen = 0;
            state.d0 = false;
            state.r1 = false;
            state.r2 = false;
            state.r3 = false;
            state.offset = 0;
            state.count = 0;

            state.dnaData = {
                "fur": {
                    "savannah": "1",
                    "selkirk": "2",
                    "": "w",
                    "birman": "4",
                    "bobtail": "6",
                    "pixiebob": "8",
                    "cymric": "a",
                    "chartreux": "b",
                    "himalayan": "c",
                    "munchkin": "d",
                    "sphynx": "e",
                    "ragamuffin": "f",
                    "ragdoll": "g",
                    "norwegianforest": "h",
                    "mainecoon": "n",
                    "laperm": "o",
                    "persian": "p",
                    "manx": "t"
                },
                "pattern": {
                    "": "w",
                    "tiger": "2",
                    "rascal": "3",
                    "ganado": "4",
                    "leopard": "5",
                    "camo": "6",
                    "spangled": "8",
                    "calicool": "9",
                    "luckystripe": "a",
                    "amur": "b",
                    "jaguar": "c",
                    "spock": "d",
                    "totesbasic_f": "f",
                    "totesbasic_g": "g",
                    "thunderstruck": "i",
                    "dippedcone": "j",
                    "tigerpunk": "m",
                    "henna": "n",
                    "totesbasic_p": "p",
                    "hotrod": "s"
                },
                "eyeColor": {
                    "thundergrey": "1",
                    "gold": "2",
                    "topaz": "3",
                    "mintgreen": "4",
                    "": "w",
                    "sizzurp": "6",
                    "chestnut": "7",
                    "strawberry": "8",
                    "sapphire": "9",
                    "forgetmenot": "a",
                    "coralsunrise": "c",
                    "doridnudibranch": "e",
                    "cyan": "g",
                    "pumpkin": "h",
                    "limegreen": "i",
                    "bubblegum": "k",
                    "twilightsparkle": "m",
                    "babypuke": "q"
                },
                "eyeShape": {
                    "": "w",
                    "wonky": "2",
                    "serpent": "3",
                    "googly": "4",
                    "otaku": "5",
                    "simple": "6",
                    "crazy": "7",
                    "thicccbrowz": "8",
                    "baddate": "b",
                    "chronic": "d",
                    "slyboots": "e",
                    "wiley": "f",
                    "stunned": "g",
                    "alien": "i",
                    "fabulous": "j",
                    "raisedbrow": "k",
                    "sass": "o",
                    "sweetmeloncakes": "p",
                    "wingtips": "r",
                    "buzzed": "t"
                },
                "baseColor": {
                    "shadowgrey": "1",
                    "salmon": "2",
                    "": "w",
                    "orangesoda": "4",
                    "cottoncandy": "5",
                    "mauveover": "6",
                    "aquamarine": "7",
                    "nachocheez": "8",
                    "harbourfog": "9",
                    "greymatter": "b",
                    "dragonfruit": "e",
                    "hintomint": "f",
                    "bananacream": "g",
                    "cloudwhite": "h",
                    "oldlace": "j",
                    "koala": "k",
                    "verdigris": "p",
                    "onyx": "r"
                },
                "highlightColor": {
                    "": "w",
                    "springcrocus": "2",
                    "egyptiankohl": "3",
                    "poisonberry": "4",
                    "lilac": "5",
                    "apricot": "6",
                    "royalpurple": "7",
                    "swampgreen": "9",
                    "violet": "a",
                    "scarlet": "b",
                    "barkbrown": "c",
                    "coffee": "d",
                    "lemonade": "e",
                    "chocolate": "f",
                    "safetyvest": "i",
                    "turtleback": "j",
                    "wolfgrey": "m",
                    "cerulian": "n",
                    "skyblue": "o",
                    "royalblue": "s"
                },
                "accentColor": {
                    "belleblue": "1",
                    "sandalwood": "2",
                    "peach": "3",
                    "icy": "4",
                    "granitegrey": "5",
                    "": "w",
                    "kittencream": "7",
                    "emeraldgreen": "8",
                    "purplehaze": "b",
                    "azaleablush": "d",
                    "missmuffet": "e",
                    "morningglory": "f",
                    "frosting": "g",
                    "daffodil": "h",
                    "flamingo": "i",
                    "bloodred": "k",
                    "periwinkle": "o",
                    "seafoam": "q",
                    "mintmacaron": "t"
                },
                "wild": {
                    "wild_1": "1",
                    "wild_2": "2",
                    "wild_3": "3",
                    "wild_4": "4",
                    "wild_5": "5",
                    "wild_6": "6",
                    "wild_7": "7",
                    "wild_8": "8",
                    "wild_9": "9",
                    "wild_a": "a",
                    "wild_b": "b",
                    "wild_c": "c",
                    "wild_d": "d",
                    "wild_e": "e",
                    "wild_f": "f",
                    "wild_g": "g",
                    "wild_h": "h",
                    "elk": "i",
                    "wild_j": "j",
                    "trioculus": "k",
                    "wild_m": "m",
                    "wild_n": "n",
                    "wild_o": "o",
                    "wild_p": "p",
                    "wild_q": "q",
                    "wild_r": "r",
                    "wild_s": "s",
                    "wild_t": "t",
                    "wild_u": "u",
                    "wild_v": "v",
                    "wild_x": "w"
                },
                "mouth": {
                    "whixtensions": "1",
                    "wasntme": "2",
                    "wuvme": "3",
                    "gerbil": "4",
                    "": "w",
                    "belch": "7",
                    "beard": "9",
                    "pouty": "a",
                    "saycheese": "b",
                    "grim": "c",
                    "happygokitty": "f",
                    "soserious": "g",
                    "cheeky": "h",
                    "starstruck": "i",
                    "dali": "m",
                    "grimace": "n",
                    "tongue": "p",
                    "yokel": "q",
                    "neckbeard": "s"
                },
                "cattributes": [
                    "savannah",
                    "selkirk",
                    "",
                    "birman",
                    "bobtail",
                    "pixiebob",
                    "cymric",
                    "chartreux",
                    "himalayan",
                    "munchkin",
                    "sphynx",
                    "ragamuffin",
                    "ragdoll",
                    "norwegianforest",
                    "mainecoon",
                    "laperm",
                    "persian",
                    "manx",
                    "",
                    "tiger",
                    "rascal",
                    "ganado",
                    "leopard",
                    "camo",
                    "spangled",
                    "calicool",
                    "luckystripe",
                    "amur",
                    "jaguar",
                    "spock",
                    "totesbasic_f",
                    "totesbasic_g",
                    "thunderstruck",
                    "dippedcone",
                    "tigerpunk",
                    "henna",
                    "totesbasic_p",
                    "hotrod",
                    "thundergrey",
                    "gold",
                    "topaz",
                    "mintgreen",
                    "",
                    "sizzurp",
                    "chestnut",
                    "strawberry",
                    "sapphire",
                    "forgetmenot",
                    "coralsunrise",
                    "doridnudibranch",
                    "cyan",
                    "pumpkin",
                    "limegreen",
                    "bubblegum",
                    "twilightsparkle",
                    "babypuke",
                    "",
                    "wonky",
                    "serpent",
                    "googly",
                    "otaku",
                    "simple",
                    "crazy",
                    "thicccbrowz",
                    "baddate",
                    "chronic",
                    "slyboots",
                    "wiley",
                    "stunned",
                    "alien",
                    "fabulous",
                    "raisedbrow",
                    "sass",
                    "sweetmeloncakes",
                    "wingtips",
                    "buzzed",
                    "shadowgrey",
                    "salmon",
                    "",
                    "orangesoda",
                    "cottoncandy",
                    "mauveover",
                    "aquamarine",
                    "nachocheez",
                    "harbourfog",
                    "greymatter",
                    "dragonfruit",
                    "hintomint",
                    "bananacream",
                    "cloudwhite",
                    "oldlace",
                    "koala",
                    "verdigris",
                    "onyx",
                    "",
                    "springcrocus",
                    "egyptiankohl",
                    "poisonberry",
                    "lilac",
                    "apricot",
                    "royalpurple",
                    "swampgreen",
                    "violet",
                    "scarlet",
                    "barkbrown",
                    "coffee",
                    "lemonade",
                    "chocolate",
                    "safetyvest",
                    "turtleback",
                    "wolfgrey",
                    "cerulian",
                    "skyblue",
                    "royalblue",
                    "belleblue",
                    "sandalwood",
                    "peach",
                    "icy",
                    "granitegrey",
                    "",
                    "kittencream",
                    "emeraldgreen",
                    "purplehaze",
                    "azaleablush",
                    "missmuffet",
                    "morningglory",
                    "frosting",
                    "daffodil",
                    "flamingo",
                    "bloodred",
                    "periwinkle",
                    "seafoam",
                    "mintmacaron",
                    "wild_1",
                    "wild_2",
                    "wild_3",
                    "wild_4",
                    "wild_5",
                    "wild_6",
                    "wild_7",
                    "wild_8",
                    "wild_9",
                    "wild_a",
                    "wild_b",
                    "wild_c",
                    "wild_d",
                    "wild_e",
                    "wild_f",
                    "wild_g",
                    "wild_h",
                    "elk",
                    "wild_j",
                    "trioculus",
                    "wild_m",
                    "wild_n",
                    "wild_o",
                    "wild_p",
                    "wild_q",
                    "wild_r",
                    "wild_s",
                    "wild_t",
                    "wild_u",
                    "wild_v",
                    "wild_x",
                    "whixtensions",
                    "wasntme",
                    "wuvme",
                    "gerbil",
                    "",
                    "belch",
                    "beard",
                    "pouty",
                    "saycheese",
                    "grim",
                    "happygokitty",
                    "soserious",
                    "cheeky",
                    "starstruck",
                    "dali",
                    "grimace",
                    "tongue",
                    "yokel",
                    "neckbeard"
                ]
            };

            return state;
        },
        methods: {
            setupAutoComplete() {
                $("#cattribute").autocomplete({
                    source: this.dnaData.cattributes,
                    select: (event, ui) => {
                        this.cattribute = ui.item.value;
                    }
                });
            },
            fromWei(price) {
                return web3.fromWei(price, 'ether');
            },
            getLink(id) {
                return 'https://www.cryptokitties.co/kitty/' + id;
            },
            sortGenProfile() {
                if (this.genSort) {
                    this.searchDna.sort(this.sortProfileByGenDown);
                } else {
                    this.searchDna.sort(this.sortProfileByGenUp);
                }

                this.genSort = !this.genSort;
            },
            sortIdProfile() {
                if (this.idSort) {
                    this.searchDna.sort(this.sortProfileByIdDown);
                } else {
                    this.searchDna.sort(this.sortProfileByIdUp);
                }

                this.idSort = !this.idSort;
            },
            sortPriceProfile() {
                if (this.price) {
                    this.searchDna.sort(this.sortProfileByPriceUp);
                } else {
                    this.searchDna.sort(this.sortProfileByPriceDown);
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
                if (this.fromWei(a.sale).substr(0, 6) > this.fromWei(b.sale).substr(0, 6)) {
                    return -1;
                } else {
                    return 1;
                }
            },
            sortProfileByPriceDown(a, b) {
                if (this.fromWei(a.sale).substr(0, 6) < this.fromWei(b.sale).substr(0, 6)) {
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
            appendRaw (thing, value) {
                console.log(this.queryString);
                this.queryString += '&'+thing+'='+value;
                console.log(this.queryString);
            },
            addParam () {
                //need to find what category the cattribute belongs too
                for (let category_name in this.dnaData) {
                    if (category_name !== 'cattributes') {
                        for (let cattribute in this.dnaData[category_name]) {
                            if (cattribute === this.cattribute) {
                                this.appendRaw(category_name, this.getDNAValue(this.dnaData[category_name][cattribute]));

                                return;
                            }
                        }
                    }
                }

            },
            getDNAValue (kaiCode) {
                var out = '';

                if (this.r3) {
                    out = kaiCode
                } else {
                    out = '_';
                }

                if (this.r2) {
                    out = out + kaiCode
                } else {
                    out = out + '_';
                }

                if (this.r1) {
                    out = out + kaiCode
                } else {
                    out = out + '_';
                }

                if (this.d0) {
                    out = out + kaiCode
                } else {
                    out = out + '_';
                }

                return out;
            },
            addGen (gen) {
                this.queryString += "&gen="+gen;
            },
            addReverseOrder () {
                this.queryString += "&orderingDown=yes";
            },
            search () {
                this.isSearching = true;
                axios.post('http://dna.cryptokittydata.info/search', qs.parse(this.queryString+"&offset="+Number.parseInt(this.offset) * 100))
                    .then(response => {
                        this.searchDna = response.data.results;
                        this.count = response.data.count;

                        this.isSearching = false;
                    });
            }
        }
    }
</script>

<style>
    html {
        overflow: auto !important;
    }

    .checkbox {
        padding-right: 10px;
    }

    .cattribute-border-left {
        border-left: #0a0a0a solid 1px;
    }
</style>