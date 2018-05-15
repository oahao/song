<template>	
<div>
   <button v-show="$store.state.dialog.show">123</button>
   <button @click="ff">456</button>
</div>   
</template>
<script>
	export default{
		created(){
			console.log(this.$store.state.dialog.show);
		},
		methods:{
			ff:function(){
				this.$store.state.dialog.hide=true;
			}
		}
	}
</script>