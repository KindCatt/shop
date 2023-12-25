<template>
	<div class="v-catalog">

		<!-- <router-link
				:to="{name: 'cart', params: {cart_data: CART}}">
			</router-link> -->
			<div class="v-catalog__link-to-cart">Корзина: {{ CART.length }}</div>
			<!-- <button
					type="button"
					@click="$router.push({ name: 'cart', params: { cart_data: CART } })">
				Перейти в корзину
			</button> -->
		
		<h1>Каталог</h1>
		<div class="v-catalog__list">
			
			<v-catalog-item
					v-for="product in PRODUCTS" :key="product.article"
					:product_data="product"
					@addToCart="addToCart"/>
		</div>
	</div>
</template>

<script>
import vCatalogItem from '@/components/catalog/vCatalogItem.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'vCatalog',
	components: {
		vCatalogItem,
	},

	data() {
		return {
		}
	},

	computed: {
		...mapGetters([
			'PRODUCTS',
			'CART'
		])
	},

	methods: {
		...mapActions([
			'GET_PRODUCTS_FROM_API',
			'ADD_TO_CART'
		]),
		addToCart(data) {
			this.ADD_TO_CART(data)
		}
	},
	
	mounted() {
		this.GET_PRODUCTS_FROM_API()
	}
}
</script>

<style lang="scss" scoped>
.v-catalog {
	h1 {
		font-size: 30px;
		font-weight: 700;
		text-align: center;
	}
	&__link-to-cart {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 16px;
		border: 1px solid #aeaeae;
	}
	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding: 20px 0;
	}
}
</style>