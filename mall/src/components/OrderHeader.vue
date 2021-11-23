<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo fl">
        <a href="/#/index"></a>
      </div>
      <div class="title fl">
        <h2>{{title}}<slot name="tips"></slot></h2>
      </div>
      <div class="username fr">
        <a href="javascript:;">Jack</a>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
    name: 'order-header',
     props: {
        title: String,
    },

}
</script>

<style lang="scss">

.order-header {
  padding: 30px 0;
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
        font-weight: bold;
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