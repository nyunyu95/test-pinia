import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    project: null
  }),
  getters: {
    getProject: state => state.project,
    getReferences: () => ['a', 'b', 'c']
  },
  actions: {
    clear () {
      this.project = null
    },
    async fetch () {
      await new Promise(resolve => {
        setTimeout(() => {
          const project = { id: 1, name: 'my project' }
          this.project = project
          resolve()  
        }, 500)
      })
    }
  }
})

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useProjectStore, import.meta.webpackHot))
}
