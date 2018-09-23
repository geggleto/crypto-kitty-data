<template>
    <section class="section">
        <div class="columns">
            <div class="column is-3"></div>
            <div class="column is-6">

                <article class="message is-warning" :class="{'is-success' : errors <= 25, 'is-warning' : errors > 25, 'is-danger' : errors >= 100 }">
                    <div class="message-header">
                        <p>Crypto Kitty Data - API HEALTH CHECK</p>
                    </div>
                    <div class="message-body">
                        <p>The number of kitties that have not been rendered by the CK API: {{ this.errors }} / 1000</p>
                        <p>
                            This number represents the number of Kitties CKD has no API data for (out of the last 1000
                            kitties).
                            They exist on the block chain but have not been processed by the CK backend.
                        </p>
                    </div>
                </article>
            </div>
            <div class="column is-3"></div>
        </div>
    </section>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        errors: 0
      }
    },
    created() {
      axios.get('https://dna.cryptokittydata.info/stats/ck/api').then((response) => {
        this.errors = response.data.api_issue;
      })
    },
    mounted() {
      axios.get('https://dna.cryptokittydata.info/stats/ck/api').then((response) => {
        this.errors = response.data.api_issue;
      })
    }
  }
</script>