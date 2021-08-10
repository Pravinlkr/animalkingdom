import Vue from 'vue'
import Vuex from 'vuex'

import animal from './modules/animal.module'


Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        animal
    }
})