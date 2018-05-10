<template>
    <div id="f1_container">
        <div id="f1_card" class="shadow">
            <div class="front face">
                <img class="image holographic-background" v-bind:src="src"/>
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

<style scoped>
    #f1_container {
        position: relative;
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
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .back {
        transform: rotateY(180deg);
        box-sizing: border-box;
        color: black;
        text-align: center;
    }

    .holographic-background {
        color: #fff;
        background: linear-gradient( -45deg, #ffcf5b, #ff99a8, #c8daff, #bbffef);
        background-size: 400% 400%;
        -webkit-animation: Gradient 4s ease infinite;
        -moz-animation: Gradient 4s ease infinite;
        animation: Gradient 4s ease infinite;
        border: #0a0a0a 1px solid;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
</style>