import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);
import dialog_store from '../components/dialog_store.js';
import play_store from '../components/play_store.js';
export default  new vuex.Store({
	// state:{
	// 	show:false
	// }   
	// 如果有多个组件都用state，不好维护
	modules:{
		dialog:dialog_store,
		play:play_store
	}
})