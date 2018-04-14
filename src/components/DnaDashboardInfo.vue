<template>
    <section class="section">
        <div class="columns">
            <div class="column is-3">

            </div>
            <div class="column is-6">
                <article class="message">
                    <div class="message-header">
                        <p>DNA Dashboard Tool</p>
                    </div>
                    <div class="message-body">
                        <p>
                            The DNA Dashboard is a tool for power users to visualize all of their crypto-kitty dna information
                            allowing them to find the best breeding pairs. The tool allows you to sort by id, gen, and price
                            as well as allows you to share your profile with others or even allows you to view other players
                            profiles.
                            <br />
                            Currently there is a 600 Kitty maximum per profile (which is currently limited by CK for 3rd
                            party app devs).
                        </p>
                        <br />
                        <p>
                            Sign-In via Metamask and try it out!
                        </p>
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
        name : 'dnaDashboardInfo',
        data() {
            return {
                modal : false
            }
        }
    }
</script>

<style>

</style>