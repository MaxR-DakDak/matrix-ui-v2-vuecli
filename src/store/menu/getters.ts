import {GetterTree} from "vuex";
import {MenuState} from "@/store/menu/type";
import {RootState} from "@/store/type";

export const getters: GetterTree<MenuState, RootState> = {
   linksMainMenuGetAll(state) {
      return state.linksMainMenu
   },
   iconsMainMenuGetAll(state) {
      return state.iconsMainMenu
   },
   linksSideMenuGetFiltered(state) {
      // @ts-ignore
      return state.linksSideMenu[state.ui.openedTab].items
   },
   searchDataGetAll(state) {
      return state.searchData
   },
   uiGetAll(state) {
      return state.ui
   },
}
