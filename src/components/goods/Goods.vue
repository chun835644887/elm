<template>
	<div class="goods-content">
		<div class="left-panel">
			<ul>
				<li v-for="(itemType,index) in goods"
				 :index="index" 
				 :class="{'active':index==activeIndex}"
				 @click="selectType(index)">
					<span class="goodType-item">{{itemType.name}}</span>
					<span v-show="typeCountArr[index]!==0" class="type-count">{{typeCountArr[index]}}</span>
				</li>
			</ul>
		</div>
		<div class="goods-item">
			<dl v-for="itemArr in goods" class="type-arr">
				<dt class="food-type">{{itemArr.name}}</dt>
				<dl v-for="item in itemArr.foods" class="food-item">
					<div class="icon">
						<img :src="item.icon" width="57" height="57" alt="">
					</div>
					<div class="food-info">
						<p class="food-name">{{item.name}}{{getSelectFood}}</p>
						<div class="sell-rating">
							<span class="sell display-ib">月售{{item.sellCount}}份</span><span class="rating display-ib">{{item.rating}}%</span>
						</div>
						<div class="food-price">
							<span class="now-price display-ib">￥{{item.price}}</span><span class="old-price display-ib" v-show="item.oldPrice">￥{{item.oldPrice}}</span>
						</div>
					</div>
					<div class="food-control">
						<v-foodcontrol :foodItem="item"></v-foodcontrol>
					</div>
				</dl>
			</dl>
		</div>

			<div class="select-list" v-show="showListIndex">
				<v-carlist :selectFood="selectFood"></v-carlist>
			</div>
		<v-showcar :seller="seller" :selectFood="selectFood"
		:showListIndex="showListIndex"
		@toggleList="getShowCarMsg">
		</v-showcar>
	</div>
</template>
<script>
import ShopCar from './ShopCar.vue';
import FoodControl from '../food-control/FoodControl.vue';
import CarList from './CarList.vue';
	export default {
		props:['seller'],
		data(){
			return {
				goods:{},
				foodTypeH:[],
				selectFood:[],
				allPrice:0,
				activeIndex:0,
				typeCountArr:[],
				showListIndex:false
			}
		},
		created:function(){
			this.$http.get('/app/goods').then(function(response){
				this.goods=response.body.data;
			});
		},
		updated:function(){
			/*数据刷新时重新获取各个分类的高度*/
			this.foodTypeH=[];
			var typeArr=document.getElementsByClassName('type-arr');
			var h=0;
			this.foodTypeH.push(h);
			for(var i=0;i<typeArr.length;i++){
				h+=typeArr[i].offsetHeight;
				this.foodTypeH.push(h);
			}
		},
		mounted:function(){
			/*添加右侧滚轮监听*/
			document.getElementsByClassName('goods-item')[0].addEventListener('scroll', this.handleScroll);
		},
		computed:{
			getSelectFood(){
				this.selectFood=[];
				this.typeCountArr=[];
				for(var i=0;i<this.goods.length;i++){
					var typeCount=0;
					for(var j=0;j<this.goods[i].foods.length;j++){
						if(this.goods[i].foods[j].count && this.goods[i].foods[j].count!==0){
							typeCount+=this.goods[i].foods[j].count;
							this.selectFood.push(this.goods[i].foods[j]);
						}
					}
					this.typeCountArr.push(typeCount);
				}
			},
		},
		methods:{
			handleScroll:function(event){
				/*获取滚动的位置*/
				var scrollT=event.target.scrollTop;
				for(var i=0;i<this.foodTypeH.length;i++){
					var smallH=this.foodTypeH[i];
					var largeH=this.foodTypeH[i+1];
					if(largeH && (scrollT>=smallH && scrollT<largeH)){
						this.activeIndex = i;
						return;
					}
				}
				this.activeIndex = 0;
			},
			selectType:function(index){
				document.getElementsByClassName('goods-item')[0].scrollTop=this.foodTypeH[index];
			},
			getShowCarMsg:function(msg){
				/*接收来自购物车的信息*/
				this.showListIndex=msg;
			}
		},
		components:{
			'v-showcar':ShopCar,
			'v-foodcontrol':FoodControl,
			'v-carlist':CarList
		}
	}
</script>
<style>
	.goods-content {
		position:absolute;
		top:172px;
		bottom:48px;
		width:100%;
	}
	.goods-content .goods-item {
		position:relative;
		padding-left:80px;
		min-height:100%;
	}
	.goods-content .left-panel {
		position:absolute;
		z-index:10;
		width:80px;
		height:100%;

		overflow:scroll;
		background-color:#f3f5f7;
	}
	.goods-content .left-panel ul li {
		position:relative;
		display:table;
		height:64px;
		width:100%;
		vertical-align:middle;
		font-size:0;

	}
	.goods-content .left-panel ul li+li {
		border-top:1px solid rgba(7,17,27,0.2)
	}
	.goods-content .left-panel ul li>.goodType-item {
		display:table-cell;
		height:100%;
		padding:0 12px;
		vertical-align:middle;
		text-align:left;
	}
	.goods-content .left-panel ul li .goodType-item {
		font-size:12px;
		color:rgb(24,20,20);
		font-weight:200;
	}
	.goods-content .left-panel ul li.active .goodType-item {
		background-color:#fff;
	}
	.goods-content .left-panel ul li .type-count {
		position:absolute;
		top:4px;
		right:0px;
		min-width:24px;
		background-color:rgb(0,170,220);
		border-radius:8px 8px 8px 0/8px 8px 8px 0;
		text-align:center;
		font-size:12px;
	}
	.goods-content .goods-item {
		height:100%;
		overflow:auto;
	}
	.goods-item .food-type {
		line-height:26px;
		padding-left:14px;
		border-left:2px solid #d9dde1;
		background-color:#f3f5f7;
		font-size:12px;
		color:rgb(147,153,159);
	}
	.goods-item .food-item {
		position:relative;
		padding:18px 0;
		margin:0 18px;
	}
	.goods-item .food-item + .food-item {
		border-top:1px solid rgba(7,17,27,0.1)
	}
	.goods-item .food-control {
		position:absolute;
		right:0px;
		bottom:5px;
	}
	.goods-item .food-info {
		padding-left:67px;
	}
	.goods-item .icon {
		position:absolute;
		top:18px;
	}
	.goods-item .food-name {
		margin-top:2px;
		line-height:14px;
		font-size:14px;
		color:rgb(7,17,27);
	}
	.goods-item .food-description,
	.goods-item .sell-rating
	 {
	 	margin-top:8px;
		line-height:10px;
		font-size:10px;
		color:rgb(147,153,159);
	}
	.goods-item .sell-rating .sell {
		margin-right:12px;
	}
	.goods-item .food-price .now-price {
		margin-right:8px;
		font-size:20px/28px;
		font-weight:normal/700;
		color:#F01414;
	}
	.select-list {
		position:fixed;
		z-index:100;
		bottom:48px;
		width:100%;
	}
</style>