<template>
	<div class="v-catalog-item">
		<img class="v-catalog-item__image" :src=" require('@/assets/images/' + product_data.image) ">
		<p class="v-catalog-item__name">{{ product_data.name }}</p>
		<p class="v-catalog-item__price">Цена: {{ product_data.price }}р.</p>
		<button class="v-catalog-item__add-to-cart-btn btn"
				@click="addToCart">
			Добавить в корзину
		</button>
	</div>
</template>

<script>
export default {
	name: 'vCatalogItem',
	
	props: {
		product_data: {
			type: Object,
			default() {
				return {}
			}
		}
	},

	data() {
		return {
			
		}
	},

	methods: {
		addToCart() {
			this.$emit('addToCart', this.product_data)
		}
	}
}
</script>

<style lang="scss" scoped>
.v-catalog-item {
	flex: 0 0 23%;
	box-shadow: 0 0 8px 0 #e0e0e0;
	padding: 16px;
	margin-bottom: 16px;
	text-align: center;
	& > * {
		margin-bottom: 8px;
	}
	&__image {
		width: 100%;
	}
}
</style>