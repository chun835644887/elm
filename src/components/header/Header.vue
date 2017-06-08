<template>
	<div id="app" >
		<div class="header">
			<div class="bg-header">
				<img :src="seller.avatar" alt="店铺logo图" width="100%" height="100%" >
			</div>
			<div class="header-content">
				<div class="avatar">
					<img :src="seller.avatar" width="64" height="64">
				</div>
				<div class="content-text">
					<div class="brand">
						<img src="./brand@2x.png" height="16" alt="">
						<span class="name">{{seller.name}}</span>
					</div>
					<div>
						<span class="description">{{seller.description}}/</span>
						<span class="delivery-time">{{seller.deliveryTime}}分钟送达</span>
					</div>
					<div v-if="seller.supports" :class="supportClass[seller.supports[0].type]" class="support">
						<img src="./decrease_1@2x.png" height="14" alt="">
						<span>{{seller.supports[0].description}}</span>
					</div>
				</div>
				
			</div>
			<div class="header-bulletin">
				<img src="./bulletin@2x.png" width="24" alt="">
				<span class="bulletin-text">{{seller.bulletin}}</span>
			</div>
			<div class="support-count" v-if="seller.supports" @click="showSupport" >
				{{seller.supports.length}}个<i class="icon iconfont icon-xiangyoujiantou"></i>
			</div>
		</div>
		<v-support :seller="seller" :supportClass="supportClass"
		:isShowSupport="isShowSupport" 
		v-show="isShowSupport" @support="getSupportMsg"></v-support>
		<div class="tab">
			<div class="tab-item">
				<router-link to="/goods">商品</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/ratings">评论</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/seller">商家</router-link>
			</div>
		</div>
		<router-view :seller="seller"></router-view>
	</div>
</template>
<script>
import Support from './Support.vue';
export default {
	data(){
		return {
			supportClass:['decrease','discount','special','invoice','guarantee'],
			supportImg:['./decrease_1@2x.png','./discount_1@2x.png','./special_1@2x.png','./invoice_1@2x.png','guarantee_1@2x.png'],
			isShowSupport:false,
		}
	},
	props:['seller'],
	methods:{
		showSupport:function(){
			this.isShowSupport=true;
		},
		getSupportMsg:function(msg){
			this.isShowSupport=msg;
		}
	},
	components:{
		'v-support':Support
	}
}
</script>
<style>
	#app {
		
	}
	.header {
		position:relative;
		background-size:100% 100%;
		background-repeat:no-repeat;
		background-color:rgba(7,17,27,0.5);
		font-size:0;
	}
	.header .bg-header {
		position:absolute;
		z-index:-1;
		width:100%;
		height:100%;
	}
	.header .content-text,
	.header .avatar {
		display:inline-block;
	}
	.header .avatar {
		margin:24px 16px 18px 24px;
	}
	.header .content-text>div>span {
		display:inline-block;
	}
	.header .content-text .brand img {
		vertical-align:top;
		margin-top:3px;
		margin-right:6px;
	}
	.header .content-text .name {
		font-size:16px;
		color:rgb(255,255,255)
	}
	.header .content-text .description,
	.header .content-text .delivery-time {
		line-height:24px;
		font-size:12px;
		color:rgb(255,255,255);
	}
	.header .content-text .support{
		font-size:0px;
		color:rgb(255,255,255);
	}
	.header .content-text .support img {
		vertical-align:top;
		margin-top:6px;
		margin-right:4px;
	}
	.header .content-text .support span {
		line-height:24px;
		font-size:10px;
	}
	.header .header-bulletin {
		background-color:rgba(7,17,27,0.2);
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size:10px;
	}
	.header .header-bulletin .bulletin-text {
		line-height:26px;
		font-size:10px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		
	}
	.header .support-count {
		position:absolute;
		right:12px;
		top:70px;
		height:24px;
		border-radius:7px/8px;
		background-color:rgba(0,0,0,0.2);
	}
	.header .support-count .icon-xiangyoujiantou {
		font-size:10px;
	}
	.header .support-count {
		line-height:24px;
		font-size:10px;
		padding:0 6px;
	}
	.tab {
		display:flex;
		width:100%;
		line-height:40px;
	}
	.tab .tab-item {
		flex:1;
		text-align:center;
	}
	.tab .tab-item>a {
		display:block;
		text-decoration:none;
		font-size:14px;
		color:rgb(77,85,93);
	}
	.tab .tab-item>a.active {
		color:rgb(240,20,20);
	}
</style>