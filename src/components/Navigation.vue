<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">

                <img src="assets/dna-search.png">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    DNA Dashboard
                </a>
            </div>

            <div class="navbar-end">
                <!-- navbar items -->
            </div>
        </div>
    </nav>
</template>

<script>
    import store from './../store';

    export default {
        name: 'navigation',

        data() {
            return store.state;
        }
    }
</script>