<template>
    <div class="goodsdesc-container">
        <h3>一加 OnePlus 7 骁龙855旗舰性能</h3>
        <hr>
        <p>1.使用感觉畅快 外观 没有划痕之类 屏幕暂时没发现 亮点 暗斑之类 小功能多 音效感觉还好 
            2桌面简介 很喜欢 对于 有些强迫症来说很适合 
            3整机握感好 背部弧形 
            4指纹解锁不太好用（个人观点）
            5顶部小图标可以自由选着开启关闭 时间可以显示秒 
            很喜欢 吐槽一下 1单手握住手指刚好压住闪光灯 （摄像头中置并列）而且突出来 握在手掌咯手 2耳机3.5mm没有 3降低颜值的水滴头 
            京东物流确实好 包装完整 快递大哥敬业 很愉快的购物</p>
            <p>
                这是第三台1+，上一台是黑色。这次红色一样惊艳。包装给我的感觉很惊艳。真的很漂亮，开箱验机，第一眼很喜欢
1.开机很简单，很快就进界面了。有的品牌开机要一大堆验证，确认很麻烦。这个开机我很喜欢
2.开机进入系统，很惊艳。第一感觉很干净、简介
3.没有开机广告、很满意
4.玩了一小会，系统很流畅。屏幕也没有评论的绿屏与其它的不良
5.看评论很多说做工很差，有很大的缝隙。特意观察了一下外观。很满意，一个都没遇到。
6.有点重，很有手感。满意
7.拍照试了几张，没有说的那么差。就是照相的选择比较小，其实多了一般人也用不过来。基本有的都有就OK
            </p>
    </div>
    </template>
<script>
export default {
    data(){
        return {
            info:{}
        };
    },
    created(){
    this.getGoodsDesc();
    },
    methods:{
     getGoodsDesc(){
         this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(result=>{
             if(result.body.status ===0){
                 this.info=result.body.message[0];
             }
         });
     },

    }
};
</script>
<style >
.goodsdesc-container{
    padding-top: 30px;
}
 .goodsdesc-container h3{
      font-size: 16px;
      color: #226aff;
      text-align: center;
      margin: 15px 0;
 }
 .goodsdesc-container p{
     text-indent: 2em;
     line-height: 30px;
 }
  .content img{
      width: 100%;
  }
</style>