<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p>View B</p>
        <p>state.project = {{ project }}</p>
        <div>
          <v-btn @click="$router.push({ name: 'view-a' })">Go to View A</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useProjectStore } from '../stores/project';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'ViewB',
  computed: {
    ...mapState(useProjectStore, {
      project: 'getProject'
    })
  },
  created () {
    this.fetch()
  },
  beforeDestroy () {
    this.clear()
  },
  methods: {
    ...mapActions(useProjectStore, {
      fetch: 'fetch',
      clear: 'clear'
    })
  }
}
</script>
