import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useProjectSetupStore = defineStore('projectSetup', () => {
  const currentProject = ref(null)

  const getProject = computed(() => currentProject.value ?? null)
  const getProjectId = computed(() => currentProject.value?.id ?? null)
  const getReferences = computed(() => ['a', 'b', 'c'])
  const getProjectItems = computed(() => currentProject.value?.items ? [...currentProject.value.items] : null)

  function clear () {
    currentProject.value = null
  }
  async function fetch () {
    await new Promise(resolve => {
      setTimeout(() => {
        const item = { id: Math.floor(Math.random() * 100), name: 'my project', items: ['a', 'b', 'c'] }
        currentProject.value = { ...item }
        resolve()
      }, 500)
    })
  }

  return { currentProject, getProject, getProjectId, getReferences, getProjectItems, clear, fetch }
})

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(acceptHMRUpdate(useProjectSetupStore, import.meta.webpackHot))
}
