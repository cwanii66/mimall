<template>
    <div class="alipay">
        <loading v-if="isLoading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from './../components/Loading.vue'
export default {
    name: 'alipay',
    components: {
        Loading,
    },
    data() {
        return {
            orderId: this.$route.query.orderId,
            content: '',
            isLoading: true,
        }
    },
    created() {
        this.paySubmit();
    },
    methods: {
        paySubmit() {
            this.axios.post('/pay', {
                orderId: this.orderId,
                orderName: 'mimall', 
                amount: 0.01,
                payType: 1
            }).then((res) => {
                this.content = res.content;
                setTimeout(() => {
                    document.forms[0].submit();
                }, 100)
            }).catch((err) => {
                this.$message.error(err);
            });
        }
    }
}
</script>