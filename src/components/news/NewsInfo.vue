<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
          <span>发表时间:{{newsinfo.add_time |dateFormat}}</span>
          <span>点击:{{newsinfo.click}}</span>   
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
 import comment from '../subcomponents/comment.vue'
 export default{
     data(){
         return {
             id:this.$route.params.id,
             newsinfo:{

             }
         };
     },
     created(){
         this.getNewsInfo();
     },
     methods:{
         getNewsInfo(){
             // 获取新闻详情页面
             this.$http.get('api/getnew/' +this.id).then(result =>{
                 if(result.body.status ===0){
                 this.newsinfo=result.body.message[0];
                 }
                 else{
                     Toast('获取失败')
                 }
             })
         }
     },
     components:{
         'comment-box':comment
     }
 };
</script>
<style>
.newsinfo-container{
    margin-top:38px;
    padding:0px 4px;
}
.title{
    text-align: center;
    font-size: 16px;
}
.subtitle{
    color: #226aff;
    font-size:14px;
    display: flex;
    justify-content: space-between;
}
</style>
