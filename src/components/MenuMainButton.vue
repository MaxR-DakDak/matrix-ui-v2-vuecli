<template>
	<div>
		<template v-if="button.title">
			<div class="menu_main_button"
			     :class="{selected: selected, dark: dark}"
			     @click="checkAction">
				{{ button.title }}
			</div>
		</template>
		<template v-else-if="button.icon">
			<div class="menu_main_button vue_tooltip"
			     @click="checkAction">
				<img class="menu_main_button__img"
				     :src="require('@/assets/' + button.icon)"
				     :alt="button.icon">
				<VTooltip v-if="button.tooltip">{{ button.tooltip }}</VTooltip>
			</div>
			<MenuSearch v-if="button.action === 'search'" :show="showSearch"></MenuSearch>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import VTooltip                   from '@/components/VTooltip.vue'
import MenuSearch                 from "@/components/MenuSearch";
import {mapGetters, mapMutations} from "vuex";

export default Vue.extend({
	name: "MenuMainButton",
	components: {
		VTooltip,
		MenuSearch
	},
	props: {
		button: {
			type: Object,
			required: true,
		},
		dark: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			selected: false,
			showSearch: false,
		}
	},
	methods: {
		...mapMutations(['checkHash']),
		checkAction() {
			if (this.button.link) {
				window.location.hash = this.button.link
			}
			else if (this.button.action) {
				if (this.button.action === 'search') {
					this.showSearch = !this.showSearch
					if (this.uiGetAll.mobileCss) this.uiGetAll.showSideMenu = false
				}
				else {
					this.button.action()
				}
			}
		},
		checkHashLink() {
			this.selected = this.button.link === this.uiGetAll.hash || this.button.sideMenu === this.uiGetAll.openedTab
		},
	},
	watch: {
		'uiGetAll.hash': {
			handler() {
				this.checkHashLink()
			},
			deep: true
		},
	},
	computed: {
		...mapGetters(['uiGetAll']),
	},
	mounted() {
		this.checkHashLink()
	},
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/app.scss";

.menu_main_button {
	padding: 5px 15px;
	border-radius: 5px;
	cursor: pointer;

	@include md {
		padding: 5px 10px;
	}

	&:hover {
		background-color: var(--dark-white);
	}

	&.dark:hover {
		color: var(--black);
		background-color: var(--dark-white);
	}

	&.selected {
		border-bottom: 1px solid var(--cyan);
		background-color: var(--mid-white);
	}

	&.dark.selected {
		color: var(--black);
	}

	&__img {
		height: 20px;
		width: auto;
	}
}
</style>
