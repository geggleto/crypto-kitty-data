<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">

                <img src="assets/dna-search.png">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" v-if="profile !== ''">
                    DNA Dashboard
                </a>
            </div>

            <div class="navbar-end">
                <tip></tip>
            </div>
        </div>
    </nav>
</template>

<script>
    import store from './../store';

    import Tip from './TipComponent';

    export default {
        name: 'navigation',

        data() {
            return store.state;
        },
        components: {
            Tip
        }
    }
</script>