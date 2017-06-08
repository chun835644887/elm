<template>
		<div class="support-detail" v-show="">
			<div class="bg-support">
				<img :src="seller.avatar" alt="" width="100%" height="100%">
			</div>
			<div class="content-support">
				<p class="support-title">{{seller.name}}</p>
				<v-star :score="seller.score" :size="starSize"></v-star>
				<v-title :title="title1" ></v-title>
				<ul class="support-list" v-if="seller.supports">
					<li v-for="item in seller.supports" :class="supportClass[item.type]">
						<span class="support-icon"></span>
						<span class="support-text">{{item.description}}</span>
					</li>
				</ul>
				<p v-else>暂无优惠信息</p>
				<v-title :title="title2"></v-title>
				<p class="seller-bulletin">{{seller.bulletin}}</p>
				<div class="close">
					<i class="icon iconfont icon-cuowu"@click="hiddenSupport"></i>
				</div>
			</div>
		</div>
</template>
<script>
import Star from '../star/Star.vue';
import Title from '../title/Title.vue';
	export default {
		props:['seller','isShowSupport','supportClass'],
		data() {
			return{
				myShowSupport:false,
				starSize:24,
				title1:'优惠信息',
				title2:'商家公告',
			}
		},
		methods:{
			hiddenSupport:function(){
				this.$emit('support',this.myShowSupport);
			}
		},
		components:{
			'v-star':Star,
			'v-title':Title
		}
	}
</script>
<style>	
	.support-detail {
		position:fixed;
		top:0;
		left:0;
		z-index:110;
		width:100%;
		height:100%;
		overflow:scroll;
		background-color:rgba(7,17,27,0.8);
		//filter:blur(10px);
	}
	.bg-support {
		width:100%;
		height:100%;
		position:fixed;
		z-index:-1;
	}
	.content-support {
		position:relative;
		min-height:100%;
		width:100%;
		padding-top:64px;
		padding-bottom:100px;
		font-size:20px;
		background-color:rgba(7,17,27,0.8);
		color:rgb(255,255,255);
	}
	.content-support .support-title {
		text-align:center;
	}
	.support-list {
		padding-left:10%;
	}
	.support-list>li {
		line-height:16px;
		font-size:0px;
	}
	.support-list>li+li {
		margin-top:12px;
	}
	.support-list .support-text {
		line-height:16px;
		font-size:14px;
	}
	.support-list .support-icon {
		display:inline-block;
		width:16px;
		height:16px;
		margin-right:6px;
		vertical-align:top;
		background-size:100% 100%;
		background-repeat:no-repeat;
	}
	.support-list .decrease .support-icon {
		background-image:url(./decrease_1@2x.png)
	}
	.support-list .discount .support-icon {
		background-image:url(./discount_1@2x.png)
	}
	.support-list .special .support-icon {
		background-image:url(./special_1@2x.png)
	}
	.support-list .invoice .support-icon {
		background-image:url(./invoice_1@2x.png)
	}
	.support-list .guarantee .support-icon {
		background-image:url(./guarantee_1@2x.png)
	}
	.support-detail .seller-bulletin {
		width:80%;
		margin:0 auto;
		padding:0 12px;
	}
	.support-detail .close {
		position:absolute;
		bottom:32px;
		width:100%;
		text-align:center;
	}
</style>