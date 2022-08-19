import {MutationTree} from "vuex";
import {MenuState} from "@/store/menu/type";

export const mutations:MutationTree<MenuState> = {
   setSearchData(state, data) {
      state.searchData = Object.assign({}, state.searchData, data)
   },
   checkHash(state) {
      if (!window.location.hash.substring(1)) state.ui.hash = 'CurrentTasks'
      else state.ui.hash = window.location.hash.substring(1)

      // @ts-ignore
      const findAllByKey = (obj, valueToFind) => {
         return Object.values(obj)
            .reduce((acc: any, v) => (v === valueToFind)
                  ? true
                  : (typeof v === 'object')
                     ? acc.concat(findAllByKey(v, valueToFind))
                     : acc
               , [])
      }

      for (const [k, v] of Object.entries(state.linksSideMenu)) {
         if (findAllByKey(v, state.ui.hash)[0]) {
            state.ui.openedTab = k
         }
      }
   },
   checkMobileCss(state) {
      if (state.ui.cacheWidth === 0) state.ui.cacheWidth = window.innerWidth

      if (state.ui.cacheWidth!== window.innerWidth) {
         state.ui.mobileCss = window.innerWidth <= 768
         state.ui.showSideMenu = window.innerWidth > 768
         state.ui.cacheWidth = window.innerWidth
      }
   },
}
