<template>
	<div @click="activateHamburger()" class="menu_hamburger" :class="{active: this.uiGetAll.showSideMenu}">
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "MenuHamburger",
	methods: {
		activateHamburger() {
			this.uiGetAll.showSideMenu = !this.uiGetAll.showSideMenu
		},
	},
	computed: {
		...mapGetters(['uiGetAll'])
	},
}
</script>

<style lang="scss" scoped>
.menu_hamburger {
	width: 36px;
	height: 18px;
	position: relative;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .5s ease-in-out;
	-moz-transition: .5s ease-in-out;
	-o-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
	cursor: pointer;

	& > span {
		display: block;
		position: absolute;
		height: 2px;
		width: 100%;
		background: var(--black);
		border-radius: 5px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: .25s ease-in-out;
		-moz-transition: .25s ease-in-out;
		-o-transition: .25s ease-in-out;
		transition: .25s ease-in-out;

		&:nth-child(1) {
			top: 0;
			-webkit-transform-origin: left center;
			-moz-transform-origin: left center;
			-o-transform-origin: left center;
			transform-origin: left center;
		}

		&:nth-child(2) {
			top: 8px;
			-webkit-transform-origin: left center;
			-moz-transform-origin: left center;
			-o-transform-origin: left center;
			transform-origin: left center;
		}

		&:nth-child(3) {
			top: 16px;
			-webkit-transform-origin: left center;
			-moz-transform-origin: left center;
			-o-transform-origin: left center;
			transform-origin: left center;
		}

	}

	&.active > span:nth-child(1) {
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		top: 0;
		left: 8px;
		width: 63%;
	}

	&.active > span:nth-child(2) {
		width: 0;
		opacity: 0;
	}

	&.active > span:nth-child(3) {
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		top: 16px;
		left: 8px;
		width: 63%;
	}
}
</style>
