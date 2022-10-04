<template>
  <div>
    <div>
      <div>
        <p>View B</p>
        <p>state.project = {{ project }}</p>
        <div>
          <button @click="$router.push({ name: 'view-a' })">Go to View A</button>
        </div>
      </div>
    </div>
  </div>
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
