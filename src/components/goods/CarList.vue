<template>
	<div class="car-list">
		<div class="car-title">
			<span>购物车</span>
			<i class="icon-lajixiang icon iconfont clean-car" @click="clearCar"></i>
		</div>
		<ul>
			<li class="list-item" 
			v-for="selectItem in selectFood">
				<span class="name">{{selectItem.name}}</span>
				<div class="list-control">
					<v-foodcontrol :foodItem="selectItem">
					</v-foodcontrol>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import FoodControl from '../food-control/FoodControl.vue';
	export default {
		props:['selectFood'],
		components:{
			'v-foodcontrol':FoodControl
		},
		methods:{
			clearCar:function(){
				for(var i=0;i<this.selectFood.length;i++){
					this.selectFood[i].count=0;
				}
				this.selectFood=[];
			}
		}
	}
</script>
<style>
	.car-list {
		width:100%;
		max-height:305px;
		overflow:auto;
	}
	.car-list .car-title,
	.car-list>ul {
		padding:0 18px;
	}
	.car-list>ul {
		background-color:rgb(255,255,255);
	}
	.car-list .car-title {
		line-height:40px;
		font-weight:200;
		font-size:14px;
		color:rgb(7,17.27);
		background-color:#f3f5f7;
	}
	.car-list .clean-car {
		float:right;
	}
	.car-list .name {
		line-height:48px;
		color:rgb(7,17,27);
	}
	.car-list .list-item {
		position:relative;
	}
	.car-list .list-control{
		position:absolute;
		right:0px;
		top:0;
		line-height:48px;
	}
</style>