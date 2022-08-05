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

<style scoped>

</style>
