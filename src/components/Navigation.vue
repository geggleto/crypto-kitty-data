<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="assets/dna-search.png">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="mobile_menu = !mobile_menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active' : mobile_menu }">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/dashboard" class="navbar-item" v-if="profile !== ''" >DNA Dashboard</router-link>
                <router-link to="/search" class="navbar-item" v-if="isAuthorized" >DNA Search</router-link>
                <router-link to="/attributes" class="navbar-item" >Cattribute Prices</router-link>
                <router-link to="/mewtation-search" class="navbar-item" >Mewtation Search</router-link>
                <router-link to="/eval" class="navbar-item" >Evaluator</router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Product Info
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/dashboard-info" class="navbar-item">DNA Dashboard (Free)</router-link>
                        <hr class="navbar-divider" />
                        <router-link to="/search-info" class="navbar-item">DNA Search (Paid)</router-link>
                    </div>
                </div>

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