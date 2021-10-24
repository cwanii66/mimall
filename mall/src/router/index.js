import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
// import Login from '../pages/login.vue'
import Order from '../pages/order.vue'
import OrderComfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import Alipay from '../pages/alipay.vue'


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
        component: Product,
      },

      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail,
      }
    ]
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },

  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList,
      },
      {
        path: 'comfirm',
        name: 'confirm',
        component: OrderComfirm,
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: OrderPay,
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: Alipay,
      }
    ]
  },


  
]

const router = new Router({
  routes
})

export default router
