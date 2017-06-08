<template>
	<div class="star-box" >

		<span v-for="(item,index) in getStarArr" class="star-item" :class="item" @click="starClick(index)" :index="index"></span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			starSize:'star-size-'+this.size,
			starArr:[]
		}
	},
	props:['score','size'],
	computed:{
		getStarArr:function(index){
			this.starArr=[];
			var scoreInt=Math.floor(this.score);
			var remainder=(this.score%1).toFixed(1);
			for(var i=0;i<scoreInt;i++){
				this.starArr.push('star-on '+this.starSize);
			}
			if(remainder!==0 && remainder>=0.5){
				this.starArr.push('star-half '+this.starSize);
			}
			while(this.starArr.length<5){
				this.starArr.push('star-off '+this.starSize);
			}
			return this.starArr;
		}
	},
	methods:{
		starClick:function(index){
			alert(index);
		}
	},
	updated:function(){

	}
}
</script>
<style>
	.star-box {
		margin:16px auto 0 auto;
		text-align:center;
	}
	.star-item {
		display:inline-block;
		background-size:100% 100%;
		background-repeat:no-repeat;
	}
	.star-item + .star-item {
		margin-left:12px;
	}
	.star-size-24{
		width:24px;
		height:24px;
	}
	.star-size-18 {
		height:18px;
		width:18px;
	}
	.star-on {
		background-image:url(./star48_on@2x.png);
	}
	.star-off {
		background-image:url(./star48_off@2x.png);
	}
	.star-half {
		background-image:url(./star48_half@2x.png);
	}
</style>