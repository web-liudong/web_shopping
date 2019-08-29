<template>
  <div class="goods-list">
    
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link> -->

    <!-- 在网页中，有两种跳转方式： -->
    <!-- 方式1： 使用 a 标签 的形式叫做 标签跳转  -->
    <!-- 方式2： 使用 window.location.href 的形式，叫做 编程式导航 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>


    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            pageindex:1,
            goodslist:[]
        };
    },
    created(){
       this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            //获取商品列表
            this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result =>{
                if(result.body.status ===0){
                   this.goodslist=this.goodslist.concat(result.body.message);
                }
            });
        },
        getMore(){
            this.pageindex++
            this.getGoodsList();
        },
        goDetail(id){
            //使用js的形式进行路由导航
            this.$router.push('/home/goodsinfo/:id' +id);
        }
    }
}
</script>
<style scoped>

.goods-list{
    padding-top: 40px;
    padding-left: 8px;
    padding-right: 8px;
     padding-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.goods-item{
  width:49%;
  border:1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 3px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}
.goods-item img{
    width: 100%;
}
.title{
    font-size:14px;
}
.info{
   background-color: #eee;
}
.info p{
    margin: 0;
    padding: 5px;
}

.sell{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.now{
   color: red;
   font-weight: bold;
   font-size: 16px;
}
.old{
     text-decoration: line-through;
     font-size: 12px;
     margin-left: 10px;
}
</style>