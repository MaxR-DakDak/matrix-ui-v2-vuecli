<template>
	<div class="menu_main">
		<template v-if="uiGetAll.mobileCss">
			<MenuHamburger></MenuHamburger>
		</template>
		<template v-else>
			<MenuMainButton
				v-for="item in linksMainMenuGetAll"
				:key="item.link"
				:button="item">
			</MenuMainButton>
		</template>

		<VSpacer></VSpacer>

		<MenuMainButton
			v-for="item in iconsMainMenuGetAll"
			:key="item.icon"
			:button="item">
		</MenuMainButton>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuMainButton from '@/components/MenuMainButton.vue'
import MenuHamburger  from '@/components/MenuHamburger.vue'
import VSpacer        from '@/components/VSpacer.vue'
import {mapGetters}   from "vuex";

export default Vue.extend({
	name: "MenuMain",
	components: {
		MenuMainButton,
		MenuHamburger,
		VSpacer,
	},
	computed: {
		...mapGetters(['linksMainMenuGetAll', 'iconsMainMenuGetAll', 'uiGetAll'])
	}
})
</script>

<style scoped>
.menu_main {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--menu-main-height);
	box-sizing: border-box;
	z-index: var(--z-index-main-menu);
	background-color: var(--white);
	border-radius: 0 0 10px 10px;
	box-shadow: var(--box-shadow-all-menu);
	padding: 5px 20px;
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 5px;
	color: var(--black);
	-ms-overflow-style: none;
	scrollbar-width: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;
	-webkit-touch-callout: none;
	-ms-user-select: none;
}
</style>
