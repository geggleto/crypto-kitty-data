import axios from 'axios';

let store = {
    state : {
        profile : '',
        dnaMember : '',
        kittyDna: [],
        profileKitties : []
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
    loadCKProfile(offset) {
        let profile = this.state.profile;

        axios.get('https://api.cryptokitties.co/kitties?owner_wallet_address='+profile+'&limit=20&offset='+offset)
            .then(response => {

                for (let i in response.data.kitties) {
                    this.state.profileKitties.push(response.data.kitties[i]);
                }

                if (response.data.kitties.length > 0) {
                    setTimeout(this.loadCKProfile(offset + 20), 500);
                } else {
                    //Fetch the DNA
                    this.getKittyDna();
                }
            })
    },
    loadOtherCKProfile(profile, offset) {

        axios.get('https://api.cryptokitties.co/kitties?owner_wallet_address='+profile+'&limit=20&offset='+offset)
            .then(response => {

                for (let i in response.data.kitties) {
                    this.state.profileKitties.push(response.data.kitties[i]);
                }

                if (response.data.kitties.length > 0) {
                    setTimeout(this.loadOtherCKProfile(profile, offset + 20), 500);
                } else {
                    //Fetch the DNA
                    this.getKittyDna();
                }
            })
    }
};

export default store;