import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

Vue.use(PiniaVuePlugin)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

Vue.config.productionTip = false

new Vue({
  vuetify,
  pinia,
  router,
  render: h => h(App)
}).$mount('#app')
