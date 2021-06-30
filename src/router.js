import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
//import Carousel from './components/Carousel.vue'
import Clube from './components/Clube.vue'
import Planos from './components/Planos.vue'
import Cadastro from './components/Cadastro.vue'
import Contato from './components/Contato.vue'
import Admin from './components/Admin.vue'
import Error404 from './components/Error404.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '*', component: Error404 },
        { path: '/login', component: Login },
        { path: '/cadastro', component: Cadastro },
        { path: '/clube', component: Clube },
        { path: '/planos', component: Planos },
        { path: '/contato', component: Contato },
        { path: '/admin', component: Admin }
    ] 
})