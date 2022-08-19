<template>
	<div v-if="uiGetAll.showSideMenu" class="menu_side"
	     :class="{active: css.lock, hover: uiGetAll.activeSideMenu}"
	     @mouseover="checkMouseOver()"
	     @mouseleave="checkMouseLeave()">

		<template v-if="uiGetAll.mobileCss">
			<MenuMainButton
				v-for="item in linksMainMenuGetAll"
				:key="item.link"
				:button="item"
				:dark="uiGetAll.mobileCss">
			</MenuMainButton>
		</template>

		<MenuSideButton
			v-for="item in linksSideMenuGetFiltered"
			:iconName="item.icon"
			:key="item.title"
			:title="item.title"
			:icon-only="css.onlyIcon"
			:link="item.link"
			:items="item.items">
		</MenuSideButton>

		<VSpacer></VSpacer>

		<MenuSideButton
			v-if="!uiGetAll.mobileCss"
			:title="!css.lock ? 'Lock Menu' : 'Unlock Menu'"
			icon-name="lock_icon"
			:icon-only="css.onlyIcon"
			@click.native="css.lock = !css.lock">
		</MenuSideButton>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import VSpacer        from "@/components/VSpacer";
import MenuSideButton from "@/components/MenuSideButton.vue"
import MenuMainButton from "@/components/MenuMainButton.vue"
import {mapGetters}   from "vuex";

export default Vue.extend({
	name: "MenuSide",
	components: {
		MenuSideButton,
		MenuMainButton,
		VSpacer,
	},
	data() {
		return {
			css: {
				onlyIcon: true,
				lock: false,
			},
		}
	},
	methods: {
		checkMouseOver() {
			if (!this.uiGetAll.mobileCss && !this.css.lock) {
				this.css.onlyIcon = false
				this.uiGetAll.activeSideMenu = true
			}
		},
		checkMouseLeave() {
			if (!this.uiGetAll.mobileCss && !this.css.lock) {
				this.css.onlyIcon = true
				this.uiGetAll.activeSideMenu = false
			}
		},
		checkMobileSideBar() {
			this.css.onlyIcon = !this.uiGetAll.mobileCss
			this.css.lock = this.uiGetAll.activeSideMenu = false
		},
	},
	beforeMount() {
		this.checkMobileSideBar()
	},
	watch: {
		'uiGetAll.mobileCss': {
			handler() {
				this.checkMobileSideBar()
			},
			deep: true
		},
	},
	computed: {
		...mapGetters(['linksSideMenuGetFiltered', 'linksMainMenuGetAll', 'uiGetAll'])
	},
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/app.scss";

.menu_side {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: var(--menu-side-width);
	gap: 5px;
	z-index: var(--z-index-side-menu);
	background: var(--linear-dark-grey);
	box-shadow: var(--box-shadow-all-menu);
	border-radius: 0 25px 25px 0;
	transition: var(--transition-all-fast);
	padding: 75px 5px;
	box-sizing: border-box;
	overflow-x: clip;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;
	-webkit-touch-callout: none;
	-ms-user-select: none;

	@include md {
		width: 100%;
		padding: 45px 20px;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	&.hover {
		width: var(--menu-side-width-active);
	}

	&.active {
		width: 250px;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>
