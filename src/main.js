import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.prototype.$urlApi = "https://trabalhoalgo.herokuapp.com"

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
