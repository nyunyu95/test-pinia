<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p>View A</p>
        <p>store value: {{ anotherTest }}</p>
        <div>
          <v-btn @click="$router.push({ name: 'view-b' })">Go to View B</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAnotherStore } from '@/stores/another';
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
