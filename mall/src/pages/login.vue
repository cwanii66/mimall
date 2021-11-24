<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png"></a>
        </div>

        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登录</span>
                        <span class="sep-line">|</span>
                        <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入账号" v-model="username">
                    </div>  
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>

                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>

                    <div class="tips"> 
                        <div class="sms">手机短信登录 <span>/</span> 注册</div>
                        <div class="reg">立即注册 <span>|</span> 忘记密码</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="footer-link">
                <a href="https://git.imooc.com/coding-397/MiMall/src/master/src/pages/login.vue" target="_blank">HOMEPAGE</a> <span>|</span>
                <a href="https://git.imooc.com/coding-397/MiMall/src/master/src/pages/login.vue" target="_blank">VUELEARNING</a> <span>|</span>
                <a href="https://git.imooc.com/coding-397/MiMall/src/master/src/pages/login.vue" target="_blank">JAVASCRIPT</a> <span>|</span>
                <a href="https://git.imooc.com/coding-397/MiMall/src/master/src/pages/login.vue" target="_blank">NODEJS</a> <span>|</span>
                <a href="https://git.imooc.com/coding-397/MiMall/src/master/src/pages/login.vue" target="_blank">PROJECT</a>
            </div>
            <p class="copyright">Copyright ©2021 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex'
import { Message } from 'element-ui'

export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            userId: '',  // cookie
            res: {}
        }
    },
    methods: {
        login() {
            let { username, password } = this;
            this.axios.post('/user/login', {
                username,
                password
            }).then((res) => {
                this.$cookie.set('userId', res.id), {expires: 'Session'}; // 保存特定用户信息
                // this.$store.dispatch('saveUserName', res.username);
                this.saveUserName(res.username)
                this.$router.push({
                    name: 'index',
                    params: {
                        from: 'login'
                    }
                });
                
            })
        },
        register() {
            this.axios.post('/user/register', {
                username: 'admin1',
                password: 'admin1',
                email: 'admin1@126.com'
            }).then(() => {
                Message.success('注册成功')
            })
        },
        ...mapActions(['saveUserName'])
    }
}
</script>

<style lang="scss">
.login {
    &>.container {
        height: 113px;
        img {
            width: auto;
            height: 100%;
        }
    }

    .wrapper {
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container {
            height: 576px;
            position: relative;
            .login-form {
                box-sizing: border-box;
                padding: 0 31px;
                width: 410px;
                height: 510px;
                background-color: #fff;
                position: absolute;
                bottom: 29px;
                right: 0;

                h3 {
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 49px;
                    .checked {
                        color: #ff6600;
                    }
                    .sep-line {
                        margin: 0 32px;
                    }
                }

                .input {
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    border: 1px solid #e5e5e5;
                    margin-bottom: 20px;
                    input {
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding: 18px;
                    }
                }
                .btn {
                    width: 100%;
                    line-height: 50px;
                    margin-top: 10px;
                    font-size: 16px;
                    text-align: center;
                }
                .tips {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 14px;
                    cursor: pointer;
                    font-size: 14px;
                    .sms {
                        color: #ff6600;
                        span {
                            font-size: 1.1em;
                        }
                    }
                    .reg {
                        color: #999;
                        span {
                            margin: 0 7px;
                            vertical-align: baseline;
                        }
                    }
                }
            }
        }
    }

    .footer {
        height: 100px;
        padding-top: 60px;
        background-color: white;
        color: #999;
        font-size: 16px;
        text-align: center;
        border: 0;
        .footer-link {
            a {
                color: #999;;
            }
            span {
                margin: 0 10px;
            }
        }
        .copyright {
            margin-top: 13px;
        }
    }
}

</style>