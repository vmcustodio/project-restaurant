import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartComponent from '@/components/CartComponent.vue'
import AddToCart from '@/components/AddToCart.vue'
import PaymentView from '../views/PaymentView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'CartComponent',
    component: CartComponent
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView
  },
  {
    path: '/addToCart/:id',
    name: 'AddToCart',
    component: AddToCart,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
