<template>
    <div id="app">
        <navigation />

        <router-view/>
    </div>
</template>

<script>
  import Navigation from './components/Navigation';

  import store from './store';

export default {
    name: 'app',
    components: {
        Navigation
    },
    data() {
        return store.state;
    },
    created() {
        if (this.profile !== '') {
            this.$router.push('dashboard');
        }
    }
}
</script>

<style>

</style>
