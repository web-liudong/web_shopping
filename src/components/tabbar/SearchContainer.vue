<template>
<div class="container">
<div class="mui-content">
			<h5 class="mui-content-padded">搜索</h5>
			<div class="mui-card">
				<form class="mui-input-group">
					<div class="mui-input-row mui-checkbox mui-left">
						<label>热度筛选</label>
						<input name="checkbox" value="Item 1" type="checkbox" >
					</div>
					<div class="mui-input-row mui-checkbox mui-left">
						<label>价格筛选</label>
						<input name="checkbox" value="Item 2" type="checkbox" checked>
					</div>
					
				</form>
			</div>
</div>
    
     
       
       <input type="text" placeholder="搜索商品" class="ss">


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

    </div>
</template>
<script>

</script>
<style scoped>

.ss{
    margin-top: 20px;
}
 .container{
      padding-top: 40px;
      background-color: #eee;
      overflow: hidden;
  }
  .container img{
      width: 60px;
      height: 60px;
  }
  .container h1{
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
</style>>
