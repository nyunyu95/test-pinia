import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAnotherStore = defineStore('another', {
  state: () => ({
    someData: 'hello'
  }),
  getters: {
    someValue: state => state.someData
  },
  persist: true
})

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useAnotherStore, import.meta.webpackHot))
}
