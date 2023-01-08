import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './scss/main.scss'
import PortalVue from 'portal-vue'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
