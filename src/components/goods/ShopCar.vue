<template>
	<div id="shop-car">
		<div class="car" 
		:class="{active:getTotalCount>0}"
		@click="showList">
			<span class="car-count" v-show="getTotalCount>0">{{getTotalCount}}</span>
			<i class="icon iconfont icon-gouwuche"></i>
		</div>
		<div class="all-price display-ib" v-show="allPrice!=0">￥{{allPrice}}</div>
		<div class="account display-ib"
		:class="{enough:allPrice>=seller.minPrice}">
			<span class="less">{{getPriceDiff}}</span>
		</div>
		<div class="delivery-price display-ib">另需配送费{{seller.deliveryPrice}}元</div>
	</div>
</template>
<script>
	export default {
		props:['seller','selectFood',"showListIndex"],
		data(){
			return {
				allPrice:0
			}
		},
		computed:{
			getTotalPrice(){
				var totalP=0;
				for(var k=0;k<this.selectFood.length;k++){
					totalP+=this.selectFood[k].count;
				}
				this.allPrice=totalP;
			},
			getPriceDiff(){
				if(this.allPrice===0){
					return '￥'+this.seller.minPrice+'元起送';
				}
				if(this.allPrice<this.seller.minPrice){
					return '还差￥'+(this.seller.minPrice-this.allPrice)+'起送';
				}
				if(this.allPrice>=this.seller.minPrice){
					return '去结算'+this.seller.minPirce;
				}
				return '￥'+this.seller.minPirce+'元起送';
			},
			getTotalCount(){
				var count=0;
				var price=0;
				for(var i=0;i<this.selectFood.length;i++){
					count+=this.selectFood[i].count;
					price+=this.selectFood[i].count*this.selectFood[i].price;
				}
				this.allPrice=price;
				return count;
			},
		},
		methods:{
			showList:function(){
				this.$emit('toggleList',!this.showListIndex);
			}
		}
	}
</script>
<style>
	#shop-car {
		position:fixed;
		z-index:100;
		bottom:0;
		width:100%;
		height:48px;
		background-color:#141D27;
	}
	#shop-car .car {
		position:absolute;
		left:14px;
		top:-6px;
		width:40px;
		height:40px;
		border-radius:50%;
		text-align:center;
		background-color:rgb(0,0,0);
	}
	#shop-car .car.active {
		background-color:rgb(0,160,220);
	}
	#shop-car .car i {
		line-height:40px;
		padding:4px;
		font-size:22px;
		border-radius:50%;
		background-color:rgba(255,255,255,.4);
	}
	#shop-car .car.active i {
		color:#fff;
		background-color:none;
	}
	#shop-car .car .car-count {
		position:absolute;
		right:-10px;
		top:-5px;
		width:20px;
		line-height:16px;
		font-size:9px;
		border-radius:6px;
		color:rgb(255,255,255);
		background-color:rgb(240,20,20);
	}
	#shop-car .all-price,
	#shop-car .v-line,
	#shop-car .delivery-price,
	#shop-car .account {
	}
	#shop-car .all-price {
		line-height:48px;
		color:#fff;
		margin-left:64px;
		margin-right:6px;
	}
	#shop-car .delivery-price {
		float:right;
		line-height:48px;
		margin-right:6px;
		font-size:16px;
		color:rgba(255,255,255,0.4);
	}
	#shop-car .account {
		float:right;
		line-height:48px;
		width:105px;
		text-align:center;
		font-size:12px;
		background-color:rgba(255,255,255,0.4);
		color:rgba(255,255,255,0.4);
	}
	#shop-car .account span {
		display:inline-block;
		width:100%;
		height:100%;
		font-size:12px;

	}
	#shop-car .account.enough span {
		font-size:16px;
		color:rgba(255,255,255,1);
		background-color:rgba(0,160,220,1);
	}
</style>