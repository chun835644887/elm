<template>
  <v-header :seller="seller"></v-header>
</template>

<script>
	import Header from './components/header/Header.vue'
	export default {
  		name: 'app',
  		components:{
  			'v-header':Header
  		},
  		data(){
  			return {
  				seller:{}
  			}
  		},
  		created:function(){
  			this.$http.get('/app/seller').then(function(response){
  				this.seller=response.body.data;
  			},);
  		}
  			
	}
</script>

<style>
	
</style>
