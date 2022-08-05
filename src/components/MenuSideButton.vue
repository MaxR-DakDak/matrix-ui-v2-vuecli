<template>
	<div class="vue_menu_side_button"
	     :class="{small: iconOnly, active: Object.keys(this.items).length ? this.showDropItems : false, selected: selected}">
		<div @click="checkAction()" class="vue_menu_side_button__main_row" :class="{active: !iconOnly}">
			<template v-if="iconName">
				<img class="vue_menu_side_button__main-icon"
				     :class="{grow: iconOnly}"
				     :src="require('@/assets/' + iconName + '.svg')"
				     alt="user">
			</template>
			<template v-else>
                <span class="vue_menu_side_button__main-icon"
                      :class="{grow: iconOnly}">{{ getFirstLetter(title) }}
                </span>
			</template>

			<template v-if="!iconOnly">
                <span class="vue_menu_side_button__title"
                      :class="{active: !iconOnly}"> {{ title }}
                </span>
				<template v-if="Object.keys(this.items).length">
					<img class="vue_menu_side_button__triangle-icon"
					     :class="{active: showDropItems}"
					     src="@/assets/triangle-icon.svg"
					     alt="drop">
				</template>
			</template>
		</div>
		<div class="vue_menu_side_button__drop_rows"
		     :class="{active: Object.keys(this.items).length ? this.showDropItems : false}">
			<template v-for="item in items">
				<a class="vue_menu_side_button__drop-link"
				   :key="item.url"
				   :class="{selected: item.selected, active: showDropItems, padding: !iconOnly}"
				   :href="'#' + item.url">
						<span class="vue_menu_side_button__drop-icon"
						      :class="{grow: iconOnly}">
							{{ getFirstLetter(item.title) }}
						</span>
					<span v-if="!iconOnly" class="vue_menu_side_button__title"> {{ item.title }}</span>
				</a>
			</template>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "MenuSideButton",
	props: {
		iconOnly: {
			type: Boolean,
			default: true,
		},
		iconName: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		action: {
			type: Boolean,
			default: false,
		},
		items: {
			type: Object,
			default() {
				return {}
			}
		},
	},
	data() {
		return {
			showDropItems: true,
			selected: false,
		}
	},
	methods: {
		getFirstLetter(str) {
			return str.split(' ').map(e => {
				return e.charAt(0).toUpperCase()
			}).join('')
		},
		checkAction() {
			if (Object.keys(this.items)) {
				this.showDropItems = !this.showDropItems
			}
			else if (this.link) {
				this.checkHash(this.link)
			}
			else if (this.action) {
				alert('some action')
			}
		},
		checkHashLink() {
			if (Object.keys(this.items)) {
				for (const [k, v] of Object.entries(this.items)) {
					this.items[k].selected = v.url === this.uiGetAll.hash
				}
			}
			this.$forceUpdate()
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
		...mapGetters(['uiGetAll'])
	},
	mounted() {
		this.checkHashLink()
	},
}
</script>

<style scoped>
.vue_menu_side_button {
	color: var(--white);
	border-radius: 5px;
	padding-left: 5px;
	padding-right: 5px;
	box-sizing: border-box;
	cursor: pointer;
}
.vue_menu_side_button.active {
	background-color: var(--dark-grey);
}
.vue_menu_side_button.small {
	text-align: center;
}
.vue_menu_side_button:hover {
	background-color: var(--dark-grey);
}
.vue_menu_side_button.selected {
	background-color: var(--cyan);
}
.vue_menu_side_button__main_row {
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	height: 30px;
	width: 100%;
	white-space: nowrap;
	box-sizing: border-box;
	font-weight: var(--font-weight-mid);
}
.vue_menu_side_button__main_row.active {
	padding-left: 10px;
}
.vue_menu_side_button__main_row.favorite {
	height: 25px;
}
.vue_menu_side_button__main-icon {
	height: var(--icon-size);
	width: var(--icon-size);
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.vue_menu_side_button__main-icon.grow {
	flex-grow: 1;
}
.vue_menu_side_button__drop_rows {
	display: flex;
	justify-content: center;
	gap: 2px;
	transform: translateY(-5px);
	overflow-x: clip;
	height: min-content;
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
}
.vue_menu_side_button__drop_rows.active {
	flex-direction: column;
	padding-top: 5px;
	padding-bottom: 5px;
}
.vue_menu_side_button__title {
	flex-grow: 1;
}
.vue_menu_side_button__title.favorite {
	font-size: 0.8rem;
}
.vue_menu_side_button__triangle-icon {
	margin-right: 8px;
	height: 6px;
	width: auto;
}
.vue_menu_side_button__triangle-icon.active {
	transform: rotate(180deg);
	transition: var(--transition-all-fast);
}
.vue_menu_side_button__drop-icon {
	width: var(--icon-size);
	max-height: var(--icon-size);;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
.vue_menu_side_button__drop-icon.grow {
	flex-grow: 1;
}
.vue_menu_side_button__drop-link {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	padding-top: 0;
	padding-bottom: 0;
	text-decoration: none;
	color: var(--white);
	white-space: nowrap;
	height: 0;
	overflow: clip;
	font-size: 0;
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
}
.vue_menu_side_button__drop-link.padding {
	padding-left: 10px;
}
.vue_menu_side_button__drop-link.active {
	font-size: 0.8rem;
	padding-top: 7px;
	padding-bottom: 7px;
	height: min-content;
	transition: var(--transition-all-fast);
}
.vue_menu_side_button__drop-link:hover {
	background-color: var(--mid-grey);
	padding-left: 15px;
	transition: var(--transition-all-fast);
}
.vue_menu_side_button__drop-link.selected {
	background-color: var(--cyan);
}
</style>