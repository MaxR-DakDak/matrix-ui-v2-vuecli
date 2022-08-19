export interface MenuState {
   linksMainMenu: Array<any>,
   iconsMainMenu: Array<any>,
   linksSideMenu: object,
   searchData: object,
   ui: {
      hash: string,
      openedTab: string,
      mobileCss: boolean,
      showSideMenu: boolean,
      activeSideMenu: boolean,
      cacheWidth: number,
   },
}
