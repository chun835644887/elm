<template>
	<div class="line-title">
		<div class="line"></div>
		<div class="title-text">{{title}}</div>
		<div class="line"></div>
	</div>
</template>
<script>
export default {
	props:['title']
}
</script>
<style>
.line-title {
	display:flex;
	margin:28px auto 24px auto;
	width:80%;
}
.line-title>div {
	display:inline-block;
}
.line-title .title-text {
	line-height:16px;
	padding:0 12px;
	font-size:16px;
	font-weight:600;
}
.line-title .line {
	flex:1;
	height:1px;
	margin-top:6px;
	border-bottom:1px solid rgba(255,255,255,0.2);
}
</style>