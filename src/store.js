import axios from 'axios';

let store = {
    state : {
        profile : '',
        dnaMember : '',
        kittyDna: [],
        profileKitties : [],
        loading : false,
        isShown : false,
        status : true,
        searchDna : [],
        isSearching : false,
        count : 0,
        filter : '',

        furColumn : false,
        patternColumn : false,
        eyeColorColumn : false,
        eyeShapeColumn : false,
        bodyColorColumn : false,
        hilightColorColumn : false,
        accentColorColumn : false,

        wildColumn : false,
        mouthColumn : false,
        secretColumn : false,
        unknownColumn : false,
        mysteryColumn : false,

        isAuthorized : false,
        mobile_menu : false,

        generation: '',
        fancies : {},
    },
    getKittyDna() {
        return axios.post('https://dna.cryptokittydata.info/fetch/dna',
            {
                kitties : this.state.profileKitties.map(
                    kitty => {
                       return { id : kitty.id };
                    }
                )
            }
        )
        .then(response => {
            this.state.kittyDna = response.data;
        });
    },
    loadProMemberCkProfile(profile) {
        this.state.loading = true;

        axios.get('https://api.cryptokitties.co/kitties/all/'+profile)
            .then(response => {
                for (let i in response.data) {
                    this.state.profileKitties.push(response.data[i]);
                }

            }).then(() => {
                this.getKittyDna()
                    .then(() => {this.state.loading = false; });
            }).catch( () => {
                this.getKittyDna()
                    .then(() => {
                        this.state.loading = false;
                    });
            });
    },
    loadOtherCKProfile(profile, offset) {
        this.state.loading = true;

        if (offset === 600) {
            this.getKittyDna()
                .then(() => {this.state.loading = false; });
        } else {

            axios.get('https://api.cryptokitties.co/kitties?owner_wallet_address=' + profile + '&limit=20&offset=' + offset)
            //axios.get('https://api.cryptokitties.co/kitties/all/'+ profile)
                .then(response => {

                    for (let i in response.data.kitties) {
                        this.state.profileKitties.push(response.data.kitties[i]);
                    }

                    if (response.data.kitties.length > 0) {
                        setTimeout(this.loadOtherCKProfile(profile, offset + 20), 500);
                    } else {
                        //Fetch the DNA
                        this.getKittyDna()
                            .then(() => {
                                this.state.loading = false;
                            });
                    }
                }).catch(() => {
                    this.getKittyDna()
                        .then(() => {this.state.loading = false; });
                   this.state.status = false;
                });
        }
    },
    save() {
        if (window && window.localStorage) {
            window.localStorage.setItem('state', JSON.stringify(this.state));
        }
    },
    load() {
        if (window && window.localStorage) {
            let value = window.localStorage.getItem('state');
            if (value) {
                this.state.profile = JSON.parse(value).profile;
            }
        }
    },
    getAuthorizations()
    {
        return axios.post('https://dna.cryptokittydata.info/authorizations', {
            profile : this.state.profile.toUpperCase()
        }).then(response => {
            this.state.isAuthorized = response.data.isAuthorized
        }).catch((err) => {
            //should do something here
        })
    }
};

export default store;