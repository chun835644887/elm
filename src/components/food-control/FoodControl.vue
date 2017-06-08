<template>
	<div class="control">
		<div class="sub" v-show="foodItem.count>0" @click="subCount">-</div>
		<div class="count-text" v-show="foodItem.count>0">{{foodItem.count}}</div>
		<div class="add" @click="addCount">+</div>
	</div>
</template>
<script>
import Vue from 'vue'
	export default {
		props:['foodItem'],
		data(){
			return {

			}
		},
		computed:{

		},
		methods:{
			addCount:function(){
				if(!this.foodItem.count){
					Vue.set(this.foodItem,'count',1);
				}else{
					this.foodItem.count+=1;
				}
			},
			subCount:function(){
				this.foodItem.count-=1;
			},
		}
	}
</script>
<style>
	.control .sub,
	.control .add,
	.control .count-text {
		display:inline-block;
	}
	.control .count-text {
		min-width:24px;
		line-height:24px;
		color:rgb(147,153,159);
		font-size:20px;
		text-align:center;
	}
	.control .add {
		line-height:20px;
		font-size:20px;
		width:20px;
		text-align:center;
		color:rgb(255,255,255);
		border-radius:50%;
		background-color:rgb(0,160,220);
	}
	.control .sub {
		line-height:16px;
		font-size:20px;
		width:16px;
		text-align:center;
		color:rgb(0,160,220);
		border-radius:50%;
		border:2px solid rgb(0,160,220);
		background-color:rgb(255,255,255);
	}
</style>