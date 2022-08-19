import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {RootState} from "@/store/type";
import {menu} from '@/store/menu/intex';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
   modules: {
      menu,
   }
}

export default new Vuex.Store<RootState>(store)

