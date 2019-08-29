<template>
<div class="container">
    <div class="goods-list">
        <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

            <mt-switch ></mt-switch>
           <img src="https://img.alicdn.com/imgextra/i3/420567757/TB2GWYTCStYBeNjSspkXXbU8VXa-420567757.jpg_430x430q90.jpg" alt="">
            <div class="info">
                <h1>Vero Moda七分袖直筒西装外套女</h1>
               <div>
                    <span class="price">$299</span>
                    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
                    <a href="">删除</a>
         
                </div>
                
            </div>
        </div>
        </div>
        </div>




    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

            <mt-switch ></mt-switch>
           <img src="https://img.alicdn.com/imgextra/i1/420567757/O1CN01i6S1yA27Akq1RCnbR_!!0-item_pic.jpg_430x430q90.jpg" alt="">
            <div class="info">
                <h1>Vero Moda春季高冷气质女装百褶针</h1>
               <div>
                    <span class="price">$499</span>
                    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
                    <a href="">删除</a>
         
                </div>
                
            </div>
        </div>
        </div>
        </div>


        <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

            <mt-switch ></mt-switch>
           <img src="https://gd1.alicdn.com/imgextra/i2/2894395693/O1CN01BdY4Uf1rvRM2Y77FN_!!2894395693.jpg_400x400.jpg" alt="">
            <div class="info">
                <h1>2019新款上衣丝连衣裙百搭打底衫</h1>
               <div>
                    <span class="price">$199</span>
                    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
                    <a href="">删除</a>
         
                </div>
                
            </div>
        </div>
        </div>
        </div>


        <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

            <mt-switch ></mt-switch>
           <img src="https://img.alicdn.com/imgextra/i1/928622636/O1CN01lugAJM1VLKaI1hYFM-928622636.jpg_430x430q90.jpg" alt="">
            <div class="info">
                <h1>LeeX-LINE女款19秋冬新品白色棉</h1>
               <div>
                    <span class="price">$299</span>
                    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
                    <a href="">删除</a>
         
                </div>
                
            </div>
        </div>
        </div>
        </div>

        <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">

            <mt-switch ></mt-switch>
           <img src="https://gd1.alicdn.com/imgextra/i1/2093416123/O1CN01EG3UUO1v6NfI4TLbW_!!2093416123.jpg_400x400.jpg" alt="">
            <div class="info">
                <h1>邬空WUK 灰蓝色格纹宽松廓形复古</h1>
               <div>
                    <span class="price">$259</span>
                    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
                    <a href="#">删除</a>
         
                </div>
                
            </div>
        </div>
        </div>
        </div>


<div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
        <div class="lefr">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <sapn class="red">0</sapn> 件，总价<sapn class="red"> ￥0</sapn></p>
            </div>  
            <mt-button type="danger" class="btn">去结算</mt-button>      
        </div>
        
         </div>
          </div>


    </div>
      
      
    </div>
</template>

<script>
 export default{
     data(){
         return {
             goodslist:[] 
         }
     },
     
      mounted(){
        mui(".mui-numbox").numbox()
    },
    created(){
        this.getGoodsList();
    },
    methods:{
      countChanged(){
        
      },
      getGoodsList(){
          var idArr = [];
          this.$store.state.car.forEach(item =>idArr.push(item.id));
          if(idArr.length<=0){
              return;
          }
          this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result =>{
              if(result.body.status ===0){
                this.goodslist =result.body.message;
              }
          }); 
      }
    }
 };
</script>
<style >
  .container{
      padding-top: 40px;
      background-color: #eee;
      overflow: hidden;
  }
  .goods-list img{
      width: 60px;
      height: 60px;
  }
  .goods-list h1{
      font-size: 12px;
      padding-left: 5px;
  }
 .price{ 
   color: red;
   font-weight: bold;
  }
  .mui-card-content-inner{
      display: flex;
      align-items: center;
  }
  .info{
      display: flex;
      flex-direction: column ;
      justify-content: space-between;
  }
  .jiesaun{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .red{
      color: red;
      font-weight: bold;
  }
  .btn{
      margin-left: 30px;
  }
</style>
