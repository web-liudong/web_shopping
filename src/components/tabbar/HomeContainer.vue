<template>
    <div>
    <mt-swipe :auto="2000">
  
  <mt-swipe-item><img src="https://img.alicdn.com/imgextra/i2/2993656168/O1CN011vQzOoDfOe4Vj1F_!!0-item_pic.jpg_430x430q90.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="https://gd2.alicdn.com/imgextra/i4/57220545/O1CN01Kp1WjF1FtePVRCDtF_!!57220545.jpg_400x400.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="//img.alicdn.com/imgextra/i2/4051687157/O1CN01oNejny22jxCF4rGPo_!!0-item_pic.jpg_430x430q90.jpg" alt=""></mt-swipe-item>
  <mt-swipe-item><img src="//img.alicdn.com/imgextra/i3/1090132605/O1CN01I9kBVa1V78Iiv8MPO_!!0-item_pic.jpg_430x430q90.jpg" alt=""></mt-swipe-item>
  
  
</mt-swipe>
<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist ">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻咨询</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/liuyan">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/myvideo">
		                   <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">会员登录</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/lxwm">
		                   <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul> 
<!--九宫格 -->
       
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
 export default{
   data(){
       return {
           lunbotuList:[]// 保存轮播图的数组
       };
   },
   created(){
       this.getLunbotu();
   },
   methods:{
       getLunbotu(){
           // 获取轮播图数据
           this.$http.get('api/getlunbo').then(result =>{
               //console.log(result.body);
               if(result.body.status===0){
                 this.lunbotuList=result.body.message;
               }
               else{
                    //失败
                 Toast('加载失败')
               }
           });
       }
   }
}
</script>
<style>
.mint-swipe{
    height: 250px;
}
.mint-swipe img{
    width: 360px;
    margin-top: 40px;
    
    height:300px;
}
 
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 img{
    width: 60px;
    height: 60px;
}
</style>





