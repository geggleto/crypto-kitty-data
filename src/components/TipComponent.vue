<template>
    <div class="navbar-item">
        <a class="button is-warning" v-on:click="onTipClick">Tip Me!</a>
    </div>
</template>

<script>
    import store from './../store';

    export default {
        name: 'Tip',

        data() {
            return store.state;
        },
        methods : {
            onTipClick() {
                let user_address = web3.eth.accounts[0];

                web3.eth.sendTransaction({
                    to: '0xCECDDbE88359f6EcEBE90b42643B002543F27fE9',
                    from: user_address,
                    value: web3.toWei('0.025', 'ether'),
                }, function (err, transactionHash) {
                    if (err) {
                        console.log("error");
                    } else {
                        console.log("thanks");
                    }
                })
            }
        }
    }

</script>

<style scoped>
</style>