<template>
	<div class="side_button"
	     :class="{small: iconOnly, active: Object.keys(this.items).length ? this.showDropItems : false, selected: selected}">
		<div @click="checkAction()" class="side_button__main_row" :class="{active: !iconOnly}">
			<template v-if="checkIfIconExist()">
				<img class="side_button__main-icon"
				     :class="{grow: iconOnly}"
				     :src="iconSrc"
				     alt="user">
			</template>
			<template v-else>
                <span class="side_button__main-icon"
                      :class="{grow: iconOnly}">{{ getFirstLetter(title) }}
                </span>
			</template>

			<template v-if="!iconOnly">
                <span class="side_button__title"
                      :class="{active: !iconOnly}"> {{ title }}
                </span>
				<template v-if="Object.keys(this.items).length">
					<img class="side_button__triangle-icon"
					     :class="{active: showDropItems}"
					     src="@/assets/triangle_icon.svg"
					     alt="drop">
				</template>
			</template>
		</div>
		<div class="side_button__drop_rows"
		     :class="{active: Object.keys(this.items).length ? this.showDropItems : false}">
			<template v-for="item in items">
				<a class="side_button__drop-link"
				   :key="item.url"
				   :class="{selected: item.selected, active: showDropItems, padding: !iconOnly}"
				   :href="'#' + item.url">
						<span class="side_button__drop-icon"
						      :class="{grow: iconOnly}">
							{{ getFirstLetter(item.title) }}
						</span>
					<span v-if="!iconOnly" class="side_button__title"> {{ item.title }}</span>
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
			iconSrc: null,
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
		checkIfIconExist() {
			try {
				const icon_name = this.iconName
				this.iconSrc = require('@/assets/' + icon_name.replace('.svg', '') + '.svg')
				return this.iconSrc
			}
			catch (e) {
				console.log('Cannot Find Icon: ' + this.iconName + ' (MenuSideButton)')
			}
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

<style lang="scss" scoped>
.side_button {
	color: var(--white);
	border-radius: 5px;
	padding-left: 5px;
	padding-right: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	box-sizing: border-box;
	cursor: pointer;

	&.active {
		background-color: var(--dark-grey);
	}

	&.small {
		text-align: center;
	}

	&:hover {
		background-color: var(--dark-grey);
	}

	&.selected {
		background-color: var(--cyan);
	}

	&__main_row {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
		height: 30px;
		width: 100%;
		white-space: nowrap;
		box-sizing: border-box;
		font-weight: var(--font-weight-mid);

		&.active {
			padding-left: 10px;
		}

		&.favorite {
			height: 25px;
		}
	}

	&__main-icon {
		height: var(--icon-size);
		width: var(--icon-size);
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;

		&.grow {
			flex-grow: 1;
		}
	}

	&__drop_rows {
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

		&.active {
			flex-direction: column;
			padding-top: 10px;
		}
	}

	&__title {
		flex-grow: 1;

		&.favorite {
			font-size: 0.8rem;
		}
	}

	&__triangle-icon {
		margin-right: 8px;
		height: 6px;
		width: auto;

		&.active {
			transform: rotate(180deg);
			transition: var(--transition-all-fast);
		}
	}

	&__drop-icon {
		width: var(--icon-size);
		max-height: var(--icon-size);;
		display: inline-flex;
		justify-content: center;
		align-items: center;

		&.grow {
			flex-grow: 1;
		}
	}

	&__drop-link {
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

		&.padding {
			padding-left: 10px;
		}

		&.active {
			font-size: 0.8rem;
			padding-top: 7px;
			padding-bottom: 7px;
			height: min-content;
			transition: var(--transition-all-fast);
		}

		&.selected {
			background-color: var(--cyan);
		}

		&:hover {
			background-color: var(--mid-grey);
			padding-left: 15px;
			transition: var(--transition-all-fast);
		}
	}
}
</style>
