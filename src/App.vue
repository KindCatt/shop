<template>
	<div id="app">
		<div></div>
		<v-main-wrapper />
	</div>
</template>

<script>
import vMainWrapper from '@/components/vMainWrapper.vue'

export default {
	name: 'app',
	components: {
		vMainWrapper
	},

	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
#app {
	padding: 50px 0;
}
</style>
