<template>
	<div class="v-main-wrapper">
		
		<v-catalog/>
		<v-cart
				v-if="CART.length"
				:cart_data="CART"/>

		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import vCatalog from '@/components/catalog/vCatalog.vue'
import vCart from '@/components/cart/vCart.vue'
import { mapGetters } from 'vuex'

export default {
	name: 'vMainWrapper',
	components: {
		vCatalog,
		vCart,
	},

	data() {
		return {
			
		}
	},

	computed: {
		...mapGetters([
			'CART'
		])
	}
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
	max-width: 1180px;
	margin: 0 auto;
}
</style>