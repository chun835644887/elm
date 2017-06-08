<template>
	<div class="ratings">
		<div class="server">
			<div class="server-score">
				<div class="rating-score">{{getAveScorp}}</div>
				<div>综合评分</div>
				<div class="complete">超过附近70%商家</div>
			</div>
			<div class="line"></div>
			<div class="server-info"></div>
		</div>
	</div>
</template>
<script>
import Star from '../star/Star.vue';
	export default {
		data(){
			return {
				ratings:{},
			}
		},
		computed:{
			getAveScorp(){
				var aveScore=0;
				for(var i=0;i<this.ratings.length;i++){
					if(this.ratings[i].score){
						aveScore+=this.ratings[i].score;
					}
				}
				return (aveScore/this.ratings.length).toFixed(1);
			}
		},
		created:function(){
			this.$http.get('/app/ratings').then(function(respones){
				this.ratings=respones.body.data;
				console.log(this.ratings);
			})
		}
	}
</script>
<style>
	.ratings {
		
	}
	.ratings .server {
		padding:18px 24px 18px 12px;

	}
	.ratings .server>div {
		display:inline-block;
	}
	.ratings .server .server-score {
		width:137px;
		color:rgb(7,17,27);
		font-size:12px;
		text-align:center;
	}
	.ratings .server>div .rating-score {
		line-height:28px;
		padding-bottom:6px;
		font-size:24px;
		color:rgb(255,153,0);
	}
	.ratings .server>div .complete {
		line-height:10px;
		font-size:10px;
		color:rgba(7,17,27,.5);
		padding-top:6px;
	}
</style>