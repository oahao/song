<template>	
<div>
  <a href="	javascript:;" @click="ee">点击</a>
  <button v-show="$store.state.dialog.hide">fafa</button>
  <button v-show="$store.getters.not_show">getters</button>
  <t-dialog></t-dialog>
</div>
</template>
<script>
	import dialog from './dialog.vue'
	export default {
		components:{
			"t-dialog":dialog
		},
		methods:{
			ee:function(){
			  // this.$store.state.dialog.show=true;
			  // this.$store.commit('_dialog');//mutations
			  this.$store.dispatch('a_dialog');			  
			}
		}
	}
</script>