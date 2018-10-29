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

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Dashboard
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/dashboard" class="navbar-item" v-if="profile !== ''" >DNA Dashboard < 600 kitties</router-link>
                        <hr class="navbar-divider" />
                        <router-link to="/dashboard-pro" class="navbar-item" v-if="profile !== ''">DNA Dashboard Pro 600+ kitties</router-link>
                    </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Tools
                    </a>

                    <div class="navbar-dropdown">
                        <router-link to="/search" class="navbar-item" v-if="isAuthorized" >DNA Search</router-link>
                        <router-link to="/attributes" class="navbar-item" >Cattribute Prices</router-link>
                        <router-link to="/mewtation-search" class="navbar-item" >Mewtation Search</router-link>
                        <router-link to="/eval" class="navbar-item" >Kitty Evaluator</router-link>
                        <router-link to="/kitty" class="navbar-item" >Gene Reader</router-link>
                        <router-link to="/fancies" class="navbar-item" >Fancy List</router-link>
                        <router-link to="/health" class="navbar-item" >CK API Health</router-link>
                        <router-link to="/breed-tool" class="navbar-item" v-if="isAuthorized" >Breed Tool</router-link>
                    </div>
                </div>



                <!--<div class="navbar-item has-dropdown is-hoverable">-->
                    <!--<a class="navbar-link">-->
                        <!--Product Info-->
                    <!--</a>-->

                    <!--<div class="navbar-dropdown">-->
                        <!--<router-link to="/search-info" class="navbar-item">DNA Recessive Search (Paid)</router-link>-->
                    <!--</div>-->
                <!--</div>-->

            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    Tips: 0xCECDDbE88359f6EcEBE90b42643B002543F27fE9
                </div>
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