<template>
	<div class="menu_search" :class="{active: show}">
		<input v-model="searchInput" placeholder="Search. Type some SN or Order (TEST)" type="text">
		<template v-if="showSearchData()">
			<div v-for="item in showSearchData()"
			     :key="item"
			     class="menu_search__list">
				<template v-if="item.sn && item.sn.trim().toLowerCase() === searchWord()">
					<a class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#support/warrantyedit/' + item.sn">
						Warranty Check
					</a>
					<a v-if="item.incoming_order_name"
					   class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#orders/viewincoming/' + item.incoming_order_name">
						Incoming: {{ item.incoming_order_name }}
					</a>
					<a v-if="item.lastOrder"
					   class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#orders/viewid/' + item.lastOrder">
						Order: {{ item.lastOrder }}
					</a>
					<a v-if="item.lastEvent"
					   class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#shipping/viewname/' + item.lastEvent">
						Shipment: {{ item.lastEvent }}
					</a>
				</template>
				<template v-else-if="item.name && item.name.trim().toLowerCase() === searchWord()">
					<a class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#orders/viewid/' + item.id">
						Order: {{ item.name }}
					</a>
				</template>
				<template v-else-if="item.document_name && item.document_name.trim().toLowerCase() === searchWord()">
					<a class="menu_search__link"
					   :href="'https://192.168.0.107:5443/#invoices/view/' + item.id">
						Invoice: {{ item.document_name }}
					</a>
				</template>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapGetters} from "vuex";

export default Vue.extend({
	name: "MenuSearch",
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			searchInput: null,
			searchCat: null,
		}
	},
	methods: {
		searchWord() {
			return this.searchInput.trim().toLowerCase()
		},
		resetSearchCat() {
			this.searchCat = null
		},
		searchData() {
			for (const [key, value] of Object.entries(this.searchDataGetAll)) {
				if (Object.values(value).some(e => Object.values(e).toString().trim().toLowerCase() === this.searchWord())) {
					this.getSearchDataBy(key)
					break
				}
			}
		},
		getSearchDataBy(key) {
			this.searchCat = key
			this.$store.dispatch('getSearchDataBy', {cat: this.searchCat, input: this.searchWord()})
		},
		showSearchData() {
			return this.searchDataGetAll[this.searchCat + '_particular']
		},
	},
	watch: {
		searchInput() {
			this.resetSearchCat()
			console.log(this.showSearchData())
			if (this.searchInput.length) this.searchData()
		},
	},
	computed: {
		...mapGetters(['searchDataGetAll']),
	}
})
</script>

<style lang="scss" scoped>
@import "@/assets/style/app.scss";

.menu_search {
	visibility: hidden;
	width: 350px;
	z-index: var(--z-index-main-menu);
	background: var(--linear-dark-grey);
	box-shadow: var(--box-shadow-all-menu);
	box-sizing: border-box;
	color: var(--white);
	text-align: center;
	padding: 3px 3px;
	border-radius: 10px;
	position: absolute;
	top: 45px;
	right: 5px;
	opacity: 0;
	transition: all .1s var(--transition-cubic-bezier);
	transform: translateX(25px);

	@include md {
		width: unset;
		right: 20px;
		left: 20px;
	}

	&.active {
		visibility: visible;
		transform: translateX(0px);
		opacity: 1;
	}

	& > input {
		box-sizing: border-box;
		width: 100%;
		height: 30px;
		outline: none;
		border-radius: 7px;
		padding-left: 10px;
		padding-right: 10px;
		font-family: var(--font-family);
		border: 1px solid var(--white);
	}

	& > input:focus {
		box-sizing: border-box;
		outline: none;
		border: 1px solid var(--cyan);
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 15px 10px;
		text-align: left;
	}

	&__link {
		text-decoration: none;
		color: var(--white);
		transition: all .1s var(--transition-cubic-bezier);

		&:hover {
			color: var(--mid-grey);
			transform: translateX(3px);
		}
	}
}
</style>
