<template>
    <div class="main-content">
        <div class="container">
            <div class="swiper-box">

                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>                        
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javacript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>

                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide
                        v-for="(item, index) in slideList"
                        :key="index"
                    >
                        <a :href="'/#/product' + item.id"><img :src="item.img" alt="#"></a>
                    </swiper-slide>

                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">

            </div>
            <div class="banner">

            </div>
            <div class="product-box">

            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
// this page embed in router-view
import ServiceBar from './../components/ServiceBar.vue'
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'index',

    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '',
                    img: '/imgs/slider/slide-5.jpg'
                }
            ]
        }
    },

    components: {
        ServiceBar,
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

    .main-content {
        .swiper-box {
            position: relative;

            .nav-menu {
                position: absolute;
                box-sizing: border-box;  // content have the padding
                width: 264px;
                height: 460px;
                padding: 26px 0;
                background-color: #55585a52;

                z-index: 99;

                .menu-wrap {
                    // display: grid;
                    // height: 460px;
                    // grid-template-rows: repeat(8, 1fr);
                    // place-items: center start;
                    .menu-item {
                        height: 51px;
                        line-height: 51px;
                        
                        a {                        
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: white;
                            padding-left: 30px;

                            &::after {
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: '';
                                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                            }

                            &:hover {
                                background-color: $colorA;
                            }
                        }
                    }
                }
            }

            .swiper-container {
                height: 460px;
                .swiper-button-prev {
                    left: 274px;
                }
                img {
                    width: 100%;
                }
            }
        }
    }
    
</style>