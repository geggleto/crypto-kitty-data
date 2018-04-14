<template>
    <section class="section">
        <div class="columns">
            <div class="column is-3">

            </div>
            <div class="column is-6">
                <article class="message">
                    <div class="message-header">
                        <p>DNA Search Tool</p>
                    </div>
                    <div class="message-body">
                        <p>
                            The DNA Search Tool product is a paid product that gives users the ability to search the entire
                            CryptoKitty ecosystem for kitties with a specific DNA Sequence (Dominant and Recessive/Hidden Genes).
                            You can think of it as Google for CryptoKitties.
                        </p>
                        <br />
                        <p>
                            In addition to DNA, players can also search specific generations and have the ability to paginate
                            through results. The tool is highly valuable for Power-Users and is a great market research tool.

                            If you are interested in joining our beta program contact <span class="has-text-weight-bold">@geggleto</span> on the  <span class="has-text-weight-bold">CryptoKitty Discord</span>.
                        </p>
                        <br />
                        <p>
                            Here's a screen shot of it in action
                            <img src="/images/screenshot.png" v-on:click="modal = true">
                        </p>
                    </div>

                    <div
                            class="modal"
                            v-bind:class="{ 'is-active': modal }"
                    >
                        <div class="modal-background" v-on:click="modal = false"></div>
                        <div class="modal-content">
                            <img src="/images/screenshot.png" alt="">
                        </div>
                        <button class="modal-close is-large" aria-label="close" v-on:click="modal = false"></button>
                    </div>
                </article>
            </div>
            <div class="column is-3">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'dnaSearchInfo',
    data() {
        return {
            modal : false
        }
    }
}
</script>

<style>

</style>