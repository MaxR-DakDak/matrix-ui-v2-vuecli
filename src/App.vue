<template>
	<div id="app">
		<MenuMain></MenuMain>
		<MenuSide></MenuSide>
		<WindowMain>TEST</WindowMain>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuMain from '@/components/MenuMain.vue'
import MenuSide from '@/components/MenuSide.vue'
import WindowMain from '@/components/WindowMain.vue'
import {mapActions, mapMutations} from "vuex";

export default Vue.extend({
	name: 'App',
	components: {
		MenuMain,
		MenuSide,
		WindowMain,
	},
	computed: {
		test() {
			return this.$store.state
		}
	},
	methods: {
		...mapMutations(['checkHash', 'checkMobileCss']),
		...mapActions(['getSearchData']),
	},
	beforeMount() {
		this.checkHash()
		this.checkMobileCss()
		this.getSearchData()
	},
	mounted() {
		window.addEventListener('resize', this.checkMobileCss);

		window.onhashchange = () => {
			this.checkHash()
		}
	},
})
</script>

<style lang="scss">
@import "@/assets/style/app.scss";
</style>
