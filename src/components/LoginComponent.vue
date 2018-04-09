<template>
    <div>
        <div class="columns">
            <div class="column is-2"></div>
            <div class="column is-8">
                <section class="section">
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
                </section>
            </div>
            <div class="column is-2"></div>
        </div>
    </div>

</template>

<script>
    import store from './../store';

    export default {
        name: 'Login',
        data() {
            return {
            }
        },
        created : () => {
            if (typeof web3 !== 'undefined') {
                this.profile = web3.eth.accounts[0];
                console.log(this.profile);
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
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
