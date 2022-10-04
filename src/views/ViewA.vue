<template>
  <div>
    <div class="text-center">
      <div cols="12">
        <p>View A</p>
        <p>store value: {{ anotherTest }}</p>
        <div>
          <button @click="$router.push({ name: 'view-b' })">Go to View B</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAnotherStore } from '../stores/another';
import { mapState } from 'pinia';

export default {
  name: 'ViewA',
  computed: {
    anotherTest () {
      return this.someValue
    },
    ...mapState(useAnotherStore, {
      someValue: 'someValue'
    })
  }
}
</script>
