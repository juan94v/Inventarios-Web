import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import historialModul from '../modules/historial';

export default new Vuex.Store({
	modules: {
		historial: historialModul
	}
})