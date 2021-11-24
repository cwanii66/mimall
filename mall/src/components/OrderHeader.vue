<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <a href="/#/index"></a>
      </div>
      <div class="title fl">
        <div>{{title}}<slot name="tips"></slot></div>
      </div>
      <div class="username fr">
        <a href="javascript:;"> {{username}} </a>
      </div>
    </div>   
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'order-header',
     props: {
        title: String,
    },
    computed: {
      ...mapState(['username'])
    }

}
</script>

<style lang="scss">

.order-header {
  padding: 30px 0;
  border-bottom: 2px solid #FF6600;
    .title, .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      font-size: 28px;
      margin-left: 54px;
      color: #333;
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999;
        font-weight: 400;
      }
    }
    .username {
      a {
        color: #666;
        font-size: 16px;
      }
    }

}
    
</style>