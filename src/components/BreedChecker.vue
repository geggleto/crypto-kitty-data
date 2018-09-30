<template>
    <section class="section">
        <div class="columns">
            <div class="column is-1"></div>
            <div class="column is-10">
                <h1 class="title">BREED TOOL</h1>
                <h2 class="subtitle">Check your CK profile for optimal breeding pairs (In the D0 Slot)</h2>

                <nav class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <div class="field is-grouped">
                                <div class="control">
                                    <input class="input is-primary" type="number" placeholder="Generation" v-model="generation">
                                </div>
                                <div class="control">
                                    <a class="button is-primary"
                                       v-on:click="go"
                                       :class="{'is-loading': loading}"
                                    >Go!</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="level-right">
                        <div class="level-item">
                            <span>Address:</span><span class="has-text-weight-bold">{{ getProfile }}</span>
                        </div>
                    </div>
                </nav>

                <table class="table is-bordered is-striped">
                    <thead>
                        <tr>
                            <th>MATCH #</th>
                            <th>SIRE #</th>
                            <th>DAME #</th>
                            <th>CALC</th>
                            <th>LINK</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(result, ind) in results">
                        <td>{{ result.match }}</td>
                        <td>{{ result.sire }}</td>
                        <td>{{ result.dame }}</td>
                        <td><a :href="result.calc" target="_blank">KITTY-CALC</a></td>
                        <td><a :href="result.link" target="_blank">BREED</a></td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="column is-1"></div>
        </div>
    </section>
</template>

<script>
  import store from '../store';
  import { findMatchesForGeneration } from '../tools/profileCompare';

  export default {
    data() {
      return {
        generation: null,
        results : [],
        loading : false
      };
    },
    methods: {
      go() {
        this.results = [];
        this.loading = true;

        findMatchesForGeneration(this.generation, this.getProfile)
          .then((matches) => {

            Object.keys(matches).forEach(key => {
              this.results.push(matches[key]);
            });

            this.loading = false;
          }).catch(() => {
            this.loading = false;
        })
      }
    },
    computed: {
      getProfile() {
        return store.state.profile;
      }
    }
  }
</script>