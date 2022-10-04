<template>
  <div>
    <div>
      <div>
        <p>View B</p>
        <p>state.project = {{ project }}</p>
        <p>(Setup Store) state.project = {{ projectSetup }}</p>
        <div>
          <button @click="$router.push({ name: 'view-a' })">Go to View A</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProjectStore } from '../stores/project';
import { useProjectSetupStore } from '../stores/project-setup';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'ViewB',
  computed: {
    ...mapState(useProjectSetupStore, {
      projectSetup: 'getProject'
    }),
    ...mapState(useProjectStore, {
      project: 'getProject'
    })
  },
  created () {
    this.fetch()
    this.fetchSetup()
  },
  beforeDestroy () {
    this.clear()
    this.clearSetup()
  },
  methods: {
    ...mapActions(useProjectSetupStore, {
      fetchSetup: 'fetch',
      clearSetup: 'clear'
    }),
    ...mapActions(useProjectStore, {
      fetch: 'fetch',
      clear: 'clear'
    })
  }
}
</script>
