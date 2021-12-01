<template>
    <div>
        <order-header :title="title">
            <template #tips>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
    name: 'order',
    components: {
        OrderHeader,
        ServiceBar,
        NavFooter
    },

    data() {
        return {
            title: '',
            tip: ''
        }
    },

    methods: {
        updateOrderHeader() {
            let path = this.$route.path;
            if (path === '/order/confirm') { // 这里的需求仅仅是对navheader组件上的数据进行匹配更新
                this.title = '订单确认';
                this.tip = '请认真填写收货地址'
            } else if (path === '/order/list' ) {
                this.title = '订单列表';
                this.tip = '请谨防钓鱼链接或诈骗电话，了解更多 >'
            } else if (path === '/order/pay') {
                this.title = '订单支付';
                this.tip = '请谨防钓鱼链接或诈骗电话，了解更多 >'
            } else {
                this.title = '订单支付';
                this.tip = '请谨防钓鱼链接或诈骗电话，了解更多 >'
            }
        }
    },

    beforeUpdate() {
        this.updateOrderHeader();
    },

    mounted() {
        this.updateOrderHeader();
    }
}
</script>

<style lang="scss">
    
</style>