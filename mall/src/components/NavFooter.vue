<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="miicon">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/" target="_blank">ChrisWong</a> <span> | </span>
            <a href="https://v3.cn.vuejs.org/api/" target="_blank">Vue pro</a> <span> | </span>
            <a href="file:///D:/books/Node.js%E5%AE%9E%E6%88%98.pdf" target="_blank">Node.js</a> <span> | </span>
            <a href="https://developer.mozilla.org/zh-CN/" target="_blank">JavaScript</a> <span> | </span>
            <a href="https://coding.imooc.com/learn/list/397.html" target="_blank">Project</a>
        </div>
        <div class="copyright">copyright ©2021 <span class="domain">mi.futurefe.com</span> All rights Reserved</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer',
    
}
</script>

<style lang="scss">

    .footer {
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333;
        color: #999;
        font-size: 16px;
        text-align: center;

        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            margin-bottom: 13px;

            a {
                color: #999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }

        }
        .copyright {
            .domain {
                color: #FF6600;
            }
        }
    }
    
</style>