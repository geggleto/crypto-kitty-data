<template>
    <div id="app">
        <navigation v-if="profile !== ''"/>
        <login-component v-if="profile === ''" />

        <router-view v-if="profile !== ''"/>
    </div>
</template>

<script>
  import LoginComponent from './components/LoginComponent';
  import Navigation from './components/Navigation';

  import store from './store';

export default {
    name: 'app',
    components: {
        Navigation,
        LoginComponent
    },
    data() {
        return store.state;
    }
}
</script>

<style>

</style>
