import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    currentProject: null
  }),
  getters: {
    getProjectId: state => state.currentProject?.id ?? null,
    getProject: (state) => state.currentProject,
    getProjectItems: state => state.currentProject?.items ? [...state.currentProject.items] : null,
    getReferences: () => ['a', 'b', 'c']
  },
  actions: {
    clear () {
      this.$reset()
    },
    async fetch () {
      await new Promise(resolve => {
        setTimeout(() => {
          const item = { id: Math.floor(Math.random() * 100), name: 'my project', items: ['a', 'b', 'c'] }
          this.currentProject = { ...item }
          resolve()
        }, 500)
      })
    }
  }
})

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useProjectStore, import.meta.webpackHot))
}
