import Vue from 'vue'

export default {
	state: {
		historial: {
			articulos: [] 
		}
	},

	mutations: {
		actualizarArticulos(state, articulo){
			state.historial.articulos.push(articulo)
		}
	},

	actions: {
		addArticulo({commit, state}, articulo){
			commit('actualizarArticulos', articulo)
		}
	},

	getters: {
		getArticulo(state){
			return state.historial.articulos;
		}
	}
}