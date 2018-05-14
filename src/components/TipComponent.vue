<template>
    <div>
        <div class="navbar-item">
            <a class="button is-warning" v-on:click="active = true" >Tip Me!</a>
        </div>

        <div class="modal is-active" v-if="active">
            <div class="modal-background" v-on:click="close"></div>
            <div class="modal-content">
                <h2 class="subtitle">Donation?! THANKS FAM</h2>

                <div class="field">
                    <label class="label">Ether</label>
                    <div class="control">
                        <input type="text" class="input" placeholder="Ether" v-model="amount" />
                    </div>
                </div>

                <a class="button is-primary" v-on:click="onTipClick" v-if="amount > 0">Tip me!</a>
                <a class="button is-danger is-pulled-right" v-on:click="active = false">Cancel</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tip',

        data() {
            return {
                amount : '',
                active : false,
                error : ''
            }
        },
        methods : {
            close() {
                this.active = false;
            },
            onTipClick() {
                let user_address = web3.eth.accounts[0];

                web3.eth.sendTransaction({
                    to: '0xCECDDbE88359f6EcEBE90b42643B002543F27fE9',
                    from: user_address,
                    value: web3.toWei(amount, 'ether'),
                }, function (err, transactionHash) {
                    if (err) {
                        this.error = 'There was an error :(';

                    } else {
                        this.$router.push('thank-you')
                    }
                })
            }
        }
    }

</script>

<style scoped>
    .modal-background {
        background-color: white;
    }
</style>