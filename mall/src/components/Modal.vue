<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <header class="modal-header">
                    <span> title </span>
                    <a href="javascript:;" class="icon-close"></a>
                </header>

                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <footer class="modal-footer">
                    <div class="btn-group">
                        <a href="javascript:;" class="btn">confirm</a>
                        <a href="javascript:;" class="btn">cancel</a>
                    </div>              
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'modal',
    props: {
        // 弹框类型 big middle small form
        modalType: {
            type: String,
            default: 'form'
        },
        // 弹框标题
        title: String,

        //按钮类型 1 2 3
        btnType: String,

        sureText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        showModal: Boolean

    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';


</style>