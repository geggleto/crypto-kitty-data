<template>

    <section class="section">
        <div class="columns">
            <div class="column is-3"></div>
            <div class="column is-6">

                    <article class="message is-info">
                        <div class="message-header">
                            <p>Crypto Kitty Data Services</p>
                        </div>
                        <div class="message-body">
                            CKD offers player power-tools to play cryptokitties. Our first free tool DNA Dashboard allows players to
                            visualize their kitty DNA sequences. We offer various other services as well including a DNA Search tool
                            which is currently available for a fixed price during our beta-phase. <router-link to="/search-info">Click here for more information</router-link>
                        </div>
                    </article>

                    <article class="message is-dark">
                        <div class="message-header"><p>Login</p></div>
                        <div class="message-body"><!---->
                            <div>
                                <div class="field has-addons">
                                    <div class="control">
                                        <a class="button is-info" v-on:click="login">
                                            Sign In With Meta-Mask
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
            </div>
            <div class="column is-3"></div>
        </div>
    </section>

</template>

<script>
    import store from './../store';

    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                profile : ''
            }
        },
        created() {

            store.load();

            if (typeof web3 !== 'undefined') {
                this.profile = web3.eth.accounts[0];

                if (store.state.profile !== this.profile) {
                    store.state.profile = '';
                }

            }
        },
        methods : {
            login() {
                let signer = web3.eth.accounts[0];
                let original_message = "Crypto Kitty Data!";
                let message = web3.toHex(original_message);

                web3.personal.sign(message, signer, (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        this.profile = web3.eth.accounts[0];
                        store.state.profile = this.profile;
                    }

                    store.getAuthorizations().then(() => {
                        store.save();
                    });

                    this.loadFancies(this.profile, 0);
                });
            },
            loadFancies(profile, offset) {
                if (offset === 600) {
                    return;
                } else {
                    axios.get('https://api.cryptokitties.co/kitties?owner_wallet_address=' + profile + '&limit=20&search=type:fancy&offset=' + offset)
                        .then(response => {
                            console.log(response.data);

                            for (let i in response.data.kitties) {
                                let kitty = response.data.kitties[i];

                                let type = kitty.fancy_type;
                                store.state.fancies[type] = true;
                            }

                            if (response.data.kitties.length > 0) {
                                setTimeout(this.loadOtherCKProfile(profile, offset + 20), 200);
                            } else {
                                return;
                            }
                        }).catch(() => {
                            //Meh
                        });
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
