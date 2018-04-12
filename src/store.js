import axios from 'axios';

let store = {
    state : {
        profile : '',
        dnaMember : '',
        kittyDna: [],
        profileKitties : [],
        loading : false,
        isShown : false,
        status : true
    },
    getKittyDna() {
        return axios.post('http://dna.cryptokittydata.info/fetch/dna',
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
    loadOtherCKProfile(profile, offset) {
        this.state.loading = true;

        if (offset === 600) {
            this.getKittyDna()
                .then(() => {this.state.loading = false; });
        } else {

            axios.get('https://api.cryptokitties.co/kitties?owner_wallet_address=' + profile + '&limit=20&offset=' + offset)
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
    }
};

export default store;