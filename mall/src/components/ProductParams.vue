<template>
    <div class="nav-bar"  :class="{'is-fixed': isFixed}">
        <div class="container">
            <div class="pro-title">
                {{ title }}
            </div>

            <div class="pro-param">
                <a href="javascript:;">概述</a> <span>|</span>
                <a href="javascript:;">参数</a> <span>|</span>
                <a href="javascript:;">用户评价</a>
                <!-- 用插槽灵活迭代button -->
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',

    props: {
        title: String,
    },
    
    data() {
        return {
            isFixed: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.initHeight);
    },
    methods: {
        initHeight() {
            let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    destroyed() {
        // 通过vue组件生命周期去除多余事件
        window.removeEventListener('scroll', this.initHeight, false);
    }, 
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';

    .nav-bar {
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;

        &.is-fixed {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: $colorG;
            box-shadow: 0 5px 5px $colorE;
            z-index: 999;
        }

        .container {
            @include flex();

            .pro-title {
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            .pro-param {
                font-size: $fontJ;
                color: $colorC;

                span {
                    margin: 0 10px;
                }
                a {
                    color: $colorC;
                }
            }
        }
    }
</style>