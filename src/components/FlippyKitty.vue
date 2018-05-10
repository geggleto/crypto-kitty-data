<template>
    <div id="f1_container">
        <div id="f1_card" class="shadow">
            <div class="front face">
                <img class="image" v-bind:src="src"/>
            </div>
            <div class="back face center">
                <p>Kitty Battles Coming Soon</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'FlippyKitty',
    props : [
        'src'
    ]
}
</script>

<style>
    #f1_container {
        position: relative;
        z-index: 1;
        perspective: 1000;
    }
    #f1_card {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 1.0s linear;
    }
    #f1_container:hover #f1_card {
        transform: rotateY(180deg);
    }
    .face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .back {
        display: block;
        transform: rotateY(180deg);
        box-sizing: border-box;
        color: black;
        text-align: center;
    }
</style>