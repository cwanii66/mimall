<template>
    <div class="header">
        <div class="nav-top-bar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:">小米商城</a>
                    <a href="javascript:">MIUI</a>
                    <a href="javascript:">云服务</a>
                    <a href="javascript:">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:" v-if="username">{{username}}</a>
                    <a href="javascript:" v-if="!username" @click="login">登录</a>
                    <a href="javascript:" v-if="username" @click="logout">退出登录</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <!-- <a href="javascript:">注册</a> -->
                    <a href="javascript:" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{ cartCount }})</a>
                </div>
            </div>
        </div>

        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product"
                                    v-for="(item, index) in phoneList"
                                    :key="index" 
                                >
                                    <a :href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{ item.name }}</div>
                                        <div class="pro-price">{{ currency(item.price) }}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>Redmi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'nav-header',
    data() {
        return {
            phoneList: []
        }
    },

    mounted() {
        this.getProductList();
        if (this.$route.params?.from === 'login'){
            this.getCartCount();
        }        
    },

    computed: {
        // username() {
        //     return this.$store.state.username
        // },

        // cartCount() {
        //     return this.$store.state.cartCount
        // }
        ...mapState(['username', 'cartCount'])
    },

    methods: {
        getProductList() {
            this.axios.get('/products', {   // get 传参用params， post传参直接传
                params: {
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res) => {
                this.phoneList = res.list;
            })
        },

        goToCart() {
            this.$router.push('/cart')   // 路由跳转方法 vue 2.x
        },

        login() {
            this.$router.push('/login')
        },

        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = 0) => {
                this.$store.dispatch('saveCartCount', res)
            })
        },

        logout() {
            this.axios.post('/user/logout').then(() => {
                this.$message.success('退出成功');
                this.$cookie.set('userId', '', {expires: '-1'});
                this.$store.dispatch('saveUserName', '');
                this.$store.dispatch('saveCartCount', '0');
            })
        },

        currency(val) {
            if (!val) return '0.00'
            return '￥ ' + val.toFixed(2)
        }
    },

}
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';

    .header {
        .nav-top-bar {
            height: 39px;
            line-height: 39px;
            background-color: #333;
            color: #B0B0B0;

            .container {
               @include flex();

                a {
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart {
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: white;
                    margin-right: 0;
                    .icon-cart {
                        display: inline-block;
                        @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
                        margin-right: 5px;
                    }
                }
            }

        }

        .nav-header {
            .container {
                position: relative;
                height: 112px;
                @include flex();
                
                .header-menu {
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu {
                        display: inline-block;
                        color: #333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 12px;
                        span {
                            cursor: pointer;
                        }
                        &:hover {
                            color: $colorA;
                            .children {
                                height: 220px;
                                // display: block;
                                opacity: 1;
                            }
                        }
                        .children {                            
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            // display: none;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, .11);
                            z-index: 999;
                            transition: height 600ms ease;
                            background-color: white;

                            ul {
                                display: inline-grid;
                                width: inherit;
                                grid-template-columns: repeat(6, 1fr);
                                grid-template-rows: 220px;
                                place-items: center center;
                            }
                            .product {
                                display: flex;
                                align-items: center;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                position: relative;
                                a {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                }
                                img {
                                    height: 111px;
                                    width: auto;
                                    
                                }
                                .pro-img {
                                    box-sizing: border-box;
                                    height: 137px;
                                    padding-top: 12px;
                                }
                                .pro-name {
                                    margin-bottom: 8px;
                                    
                                    color: $colorB;
                                }
                                .pro-price {
                                    color: $colorA;
                                }

                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 42px;
                                    right: -24px;
                                    border-left: 1px solid $colorF;
                                    height: 110px;
                                    width: 1px;
                                }
                                &:last-child::before {
                                    display: none;
                                }
                            }
                            
                        }
                    }
                }

                .header-search {
                    width: 319px;
                    .wrapper {
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display: flex;
                        align-items: center;

                        input {
                            box-sizing: border-box;  // 在browser里调试
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a {
                            @include bgImg(18px, 18px, '/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            
            }

        }

    }
</style>