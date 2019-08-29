// 入口文件

import Vue from   'vue'

// 导入路由的包

 import VueRouter from 'vue-router'

 //  安装路由模块
 
 Vue.use(VueRouter)
// 导入vue-resource
import Vuex from 'vuex'
Vue.use(Vuex)

var car=JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
     addToCar(state,goodsinfo){

      var flag =false
          state.car.some(item=>{
            if(item.id == goodsinfo.id){
              item.count += parseInt(goodsinfo.count)
              flag=true
              return true 
            }
          })
          if(flag === false){
            state.car.push(goodsinfo)
          }
     }
  },
  getters:{
        getAllCount(state){
          var c=0 ;
          state.car.forEach(item=>{
            c +=item.count
          })
          return c
        },
        getGoodsCount(state) {
          var o = {}
          state.car.forEach(item => {
            o[item.id] = item.count
          })
          return o
        },
  }
}) 

  // 导入事件插件
 import moment from 'moment'

// 定义全局的过滤器
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
     return  moment(dataStr).format(pattern)
})
  import VueResource from 'vue-resource'
  // 安装
  Vue.use(VueResource)
//  导入mui的样式
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//  按需导入 mint-ui 的组件
 import { Header, Swipe, SwipeItem,Button,Lazyload,Switch} from  'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);
/*import  MintUI from 'mint-ui'
vue.use(MintUI) 
import 'mint-ui/lib/style.css'*/

import VuePreview from 'vue-preview'
 Vue.use(VuePreview)

// 导入router.JS的路由模块
import router from './router.js'

// 导入 app的根组件
import app from './App.vue'
var vm  =new Vue({
    el:'#app',
    render: c =>c (app),
    router,// 挂载路由对象在vm实例上
    store
})