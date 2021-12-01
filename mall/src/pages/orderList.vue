<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="isLoading"></loading>
          <div class="order"
            v-for="(order, i) in list"
            :key="i"
          >
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}} 
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list"
                    v-for="(item, index) in order.orderItemVoList"
                    :key="index"
                >
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.currentUnitPrice}} X {{item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status === 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination style="text-align: right"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change = "handleChange"
          ></el-pagination>
          <no-data v-if="!isLoading && list.length === 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from './../components/Loading.vue';
import NoData from './../components/NoData.vue';
import { Pagination } from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll';

export default {
    name: 'order-list',
    components: { 
      Loading,
      NoData,
      [Pagination.name]: Pagination,
    },
    directives: {
        infiniteScroll
    },
    
    data() {
        return {
            isLoading: false,
            list: [],
            pageSize: 5,
            pageNum: 1,
            total: 0,
        }
    },
    created() {
        this.getOrderList();
    },

    methods: {
        getOrderList() {
            this.isLoading = true;
            this.axios.get('/orders', {
                params: {
                    pageSize: this.pageSize,
                    pageNum: this.pageNum
                }
            }).then((res) => {
                this.isLoading = false;
                this.list = res.list ?? [];
                this.total = res.total;
            }).catch(() => {
                this.isLoading = false;
            })
        },
        goPay(orderNo) {
            // 不同路由跳转方式
            // this.$router.push({
            //     name: 'order-pay',
            //     query: {
            //         orderNo
            //     }
            // })
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo
                }
            })
        },
        // 分页器
        handleChange(pageNo) {
            this.pageNum = pageNo;
            this.getOrderList();
        },
    }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>