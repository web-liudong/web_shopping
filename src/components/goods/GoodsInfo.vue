<template>
    <div class="goodsinfo_container">
      <transition
      
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
      </transition>
      
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					 <mt-swipe :auto="3000">
  
                  <mt-swipe-item><img src="https://gd2.alicdn.com/imgextra/i4/57220545/O1CN01Kp1WjF1FtePVRCDtF_!!57220545.jpg_400x400.jpg" alt=""></mt-swipe-item>
               <mt-swipe-item><img src="https://img.alicdn.com/imgextra/i2/2993656168/O1CN011vQzOoDfOe4Vj1F_!!0-item_pic.jpg_430x430q90.jpg" alt=""></mt-swipe-item>
  
  
                </mt-swipe>
					</div>
				</div>
			</div>



         <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥2800</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2700</span>
          </p>
          <p>购买数量: <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>
            
        
        <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：49</p>
          <p>库存情况：25件</p>
          <p>上架时间:2019-5-4</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>

    </div>
</template>
<script>
 
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id: this.$route.params.id,
            lunbotu:[],
            goodsinfo:{},
            ballFlag:false,
            selectedCount:1
        };
    },
    created(){
        this.getLunbotu();
        this.getGoodsInfo();
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{
      countChanged(){
        this.$emit('')
      },
        getLunbotu(){
            this.$http.get('api/getthumimages/' + this.id).then(result=>{
                if(result.body.status  ===0){
                 this.lunbotu =result.body.message;
                }
            });
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/' +this.id).then(result =>{
                if(result.body.status ===0){
                    this.goodsinfo =result.body.message[0];
                }
            })
        },
        goDesc(id){
          this.$router.push({
            name:"goodsdesc",
            params:{id}
          })
        },
        goComment(id){
         this.$router.push({
            name:"goodscomment",
            params:{id}
          })
        },
        addToShopCar(){
          this.ballFlag= !this.ballFlag;
          var goodsinfo = {id: this.id,count:this.selectedCount,price:this.goodsinfo.sell_price,selected:true};
          this.$store.commit('addToCar',goodsinfo); 
        },
       /*beforeEnter(el){
          el.style.transform="translate(0,0)";
        },
        enter(el,done){
          el.offsetWidth;
          const ballPosition = this.$refs.ball.getBoundingClientRect();
           const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
          el.style.transform="translate(${xDist}px, ${yDist}px)";
          el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)";
          done()
        },
        afterEnter(el){
          this.ballFlag= !this.ballFlag;
        }*/
        getSelectedCount(count){
           this.selectedCount  = count;
        }
    },
}
</script>
<style scoped>
  .goodsinfo_container{
      padding-top:20px;
      background-color: #eee;
  }
   .mint-swipe{
    height: 250px;
}
.mint-swipe img{
    width: 100%;
    height: 100%;
}
 
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
}
.now_price{
      color: red;
      font-size: 16px;
      font-weight: bold;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin: 15px 0;
}
.ball{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 452px;
  left: 78px;
}
</style>