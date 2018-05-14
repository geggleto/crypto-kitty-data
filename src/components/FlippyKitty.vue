<template>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper" v-bind:class="{ captured : fancies[type], 'not-captured': !fancies[type] }">
            <div class="front">
                <img class="captured-icon" src="/assets/ether-diamond.gif" v-if="fancies[type]">
                <img class="image" v-bind:src="src" v-bind:class="{ 'holographic-background' : holo }"/>
            </div>
            <div class="back">
                <img class="image" src="/assets/KB-Logo.png">
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store';

export default {
    name : 'FlippyKitty',
    props : [
        'src',
        'holo',
        'type'
    ],
    data() {
        return {
            fancies : store.state.fancies
        }
    }
}
</script>

<style>

</style>