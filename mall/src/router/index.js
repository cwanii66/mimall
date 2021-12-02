import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      }, 

      {
        path: '/product/:id',   //:id--->dynamic page with id
        name: 'product',
        component: () => import('../pages/product.vue'),
      },

      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../pages/detail.vue'),
      }
    ]
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
  },

  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order.vue'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('../pages/orderList.vue'),
      },
      {
        path: 'confirm',
        name: 'confirm',
        component: () => import('../pages/orderConfirm.vue'),
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('../pages/orderPay.vue'),
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../pages/alipay.vue'),
      }
    ]
  },


  
]

const router = new Router({
  routes
})

export default router
