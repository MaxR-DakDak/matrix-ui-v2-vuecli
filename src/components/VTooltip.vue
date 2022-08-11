<template>
	<span :ref="'tooltip'+_uid"
	      class="vue_tooltip__text"
	      :style="{width: content}">
		<slot></slot>
	</span>
</template>

<script>
export default {
	name: "VTooltip",
	data() {
		return {
			content: 'max-content'
		}
	},
	methods: {
		overflow() {
			const window_width = window.innerWidth
			const elem_width = this.$refs['tooltip' + this._uid].getBoundingClientRect().right
			this.content = window_width < elem_width ? 'min-content' : 'max-content'
		}
	},
	mounted() {
		this.overflow()
	},
}
</script>

<style>
/*vue_tooltip*/
.vue_tooltip {
	position: relative;
	display: inline-flex;
	justify-content: center;
	align-items: center;
}

.vue_tooltip .vue_tooltip__text {
	visibility: hidden;
	background-color: var(--black-25);
	color: var(--white);
	text-align: center;
	padding: 5px 15px;
	border-radius: 5px;
	position: absolute;
	z-index: var(--z-index-tooltip);
	top: 42px;
	left: 0;
}

.vue_tooltip:hover .vue_tooltip__text {
	visibility: visible;
}
</style>
