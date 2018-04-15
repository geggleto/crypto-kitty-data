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

    export default {
        name: 'Login',
        data() {
            return {
                profile : ''
            }
        },
        created : () => {

            store.load();

            if (typeof web3 !== 'undefined') {
                this.profile = web3.eth.accounts[0];

                if (store.state.profile !== this.profile) {
                    store.state.profile = '';
                }
            }
        },
        methods : {
            login : () => {
                let signer = this.profile;
                let original_message = "Crypto Kitty Data!";
                let message = web3.toHex(original_message);
                let message_hash = web3.sha3(
                    '\u0019Ethereum Signed Message:\n' +
                    message.length.toString() +
                    message
                );

                web3.personal.sign(message, signer, (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        store.state.profile = this.profile;
                    }

                    store.getAuthorizations().then(() => {
                        store.save();
                    });
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
