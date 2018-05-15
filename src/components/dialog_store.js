export default({
	state:{
		show:false,  //  $store.state.dialog.show
		hide:false
	},
	mutations:{
		_dialog(state){
			state.show=state.show?false:true;
			//还可以操作其他的state
		}
	},
	actions:{
		a_dialog(context){
			context.commit('_dialog');
			// 还可以操作其他的mutations
		}
	},
	getters:{
		not_show(state){
			return !state.show;
		}
	}
})