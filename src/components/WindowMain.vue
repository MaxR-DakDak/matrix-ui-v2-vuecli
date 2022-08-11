<template>
	<div class="window_main" :class="{resize: uiGetAll.activeSideMenu}">
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
.window_main {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - var(--menu-main-height));
	width: calc(100% - var(--menu-side-width));
	color: var(--black);
	float: right;
	padding-top: var(--menu-main-height);
	transition: var(--transition-all-fast);

	&.resize {
		width: calc(100% - var(--menu-side-width-active))
	}
}
</style>
