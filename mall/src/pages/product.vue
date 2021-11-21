<template>
    <div class="product">
        <product-params>
            <template #buy>
                <button class="btn">立即购买</button>
            </template>
        </product-params>

        <div class="h">#####</div>
        <div class="h">#####</div>
        <div class="h">#####</div>
        <div class="h">#####</div>
        <div class="h">#####</div>
        <div class="h">#####</div>
        
    </div>
</template>

<script>
import ProductParams from './../components/ProductParams.vue'

export default {
    name: 'product',

    components: {
        ProductParams
    }
}
</script>

<style lang="scss">

.h {
    height: 150px;
}

.product {
    button {
        margin-left: 10px;
    }
}

</style>