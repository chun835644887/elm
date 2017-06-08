import Vue from 'vue'
import App from './App'
// import Router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/Ratings.vue'
import Seller from './components/seller/Seller.vue'
import iconFont from './common/css/iconfont.css'
import baseCss from './common/css/base.css'
Vue.use(VueRouter);
Vue.use(VueResource);
var router = new VueRouter({
    routes: [
    {
        path: '/goods',
        component: Goods
    }, {
        path: '/ratings',
        component: Ratings
    }, {
        path: '/seller',   
        component: Seller
    },{
        path:'/',
        component:Goods
    }],
    linkActiveClass:'active',
    base:'/my-app/'
});
var app=new Vue({
	router,
	el:'#app',
	render:h => h(App)
});







// new Vue({
// 	router,
// 	el:'#app',
// 	components:{
// 		App
// 	}
// });