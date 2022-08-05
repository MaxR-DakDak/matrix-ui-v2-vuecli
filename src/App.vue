<template>
	<div id="app">
		<MenuMain></MenuMain>
		<MenuSide></MenuSide>
		<WindowMain>TEST</WindowMain>
	</div>
</template>

<script>
import MenuMain                   from '@/components/MenuMain.vue'
import MenuSide                   from '@/components/MenuSide.vue'
import WindowMain                 from '@/components/WindowMain.vue'
import {mapActions, mapMutations} from "vuex";

export default {
	name: 'App',
	components: {
		MenuMain,
		MenuSide,
		WindowMain,
	},
	methods: {
		...mapMutations(['checkHash', 'checkMobileCss']),
		...mapActions(['getSearchData']),
	},
	beforeMount() {
		this.checkHash(window.location.hash.substring(1))
		this.checkMobileCss()
		this.getSearchData()
	},
	mounted() {
		window.addEventListener('resize', this.checkMobileCss);

		window.onhashchange = () => {
			this.checkHash(window.location.hash.substring(1))
		}
	},
}
</script>

<style lang="scss">
@import "@/assets/style/app.scss";
</style>
