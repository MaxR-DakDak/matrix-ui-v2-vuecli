<template>
	<div class="vue-menu-main" :class="{resize: uiGetAll.activeSideMenu}">
		<slot></slot>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "WindowMain",
	computed: {
		...mapGetters(['uiGetAll']),
	},
}
</script>

<style lang="scss" scoped>
.vue-menu-main {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - var(--vue-menu-main-height));
	width: calc(100% - var(--vue-menu-side-width));
	color: var(--black);
	float: right;
	padding-top: var(--vue-menu-main-height);
	transition: var(--transition-all-fast);

	&.resize {
		width: calc(100% - var(--vue-menu-side-width-active))
	}
}
</style>
