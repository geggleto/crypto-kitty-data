<template>
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
            <div class="front">
                <img class="image" v-bind:src="src" v-bind:class="{ 'holographic-background' : holo }"/>
            </div>
            <div class="back">
                <img class="image" src="/assets/KB-Logo.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'FlippyKitty',
    props : [
        'src',
        'holo'
    ]
}
</script>

<style>

</style>