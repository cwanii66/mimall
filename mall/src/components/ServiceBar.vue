<template>
    <div class="service">
        <div class="container">
            <ul>
                <li></li>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7days"></span>7天无理由退货</li>
                <li><span class="icon-15days"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150元包邮</li>
                <li></li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'service-bar'
    }
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';

    .service {
        padding: 33px 0;
        color: #666;
        font-size: 16px;
        text-align: center;

        .container {
            > ul {
                display: grid;
                grid-template-columns: repeat(6, 1fr);

                li {
                    border-right: 1px solid #E5E5E5;
                    &:last-child {
                        border: none;
                    }
                    span {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        vertical-align: middle;
                        margin-right: 8px;
                    }
                    .icon-setting {
                        @include bgImg(20px, 20px, '/imgs/icon-setting.png');
                    }
                    .icon-7days {
                        @include bgImg(20px, 20px, '/imgs/icon-7day.png');
                    }
                    .icon-15days {
                        @include bgImg(20px, 20px, '/imgs/icon-15day.png');
                    }
                    .icon-post {
                        @include bgImg(20px, 20px, '/imgs/icon-post.png');
                    }

                }
            }
        }
    }
    
</style>