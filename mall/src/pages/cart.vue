<template>
    <div class="cart">
        <order-header title="我的购物车">
            <template #tips>
                <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>

        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import ServiceBar from '../components/ServiceBar.vue'

export default {
    name: 'cart',

    components: {
        OrderHeader,
        NavFooter,
        ServiceBar
    }
}
</script>