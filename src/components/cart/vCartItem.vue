<template>
	<div class="v-cart-item">
		<img class="v-cart-item__image" :src=" require('@/assets/images/' + cart_item_data.image) ">
		<div class="v-cart-item__info">
			<p>{{ cart_item_data.name }}</p>
			<p>{{ cart_item_data.price }}</p>
			<p>{{ cart_item_data.article }}</p>
		</div>
		<div class="v-cart-item__quantity">
			<p>
				<span class="quantity__btn"
						@click="decrementItem">-</span>
				Кол-во: {{ cart_item_data.quantity }}
				<span class="quantity__btn"
						@click="incrementItem">+</span>
			</p>
		</div>
		<button class="del-btn"
				@click="deleteFromCart">
			Убрать из корзины
		</button>
	</div>
</template>

<script>

export default {
	name: 'vCartItem',
	
	props: {
		cart_item_data: {
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
		
		decrementItem() {
			this.$emit('decrement')
		},
		incrementItem() {
			this.$emit('increment')
		},
		
		deleteFromCart() {
			this.$emit('deleteFromCart')
		}
	},
}
</script>

<style lang="scss" scoped>
.v-cart-item {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 0 8px 0 #e0e0e0;
	padding: 16px;
	margin-bottom: 16px;
	&__image {
		max-width: 100px;
	}
	&__info {
		margin-left: -400px;
		p {
			margin-bottom: 8px;
		}
	}
}

.quantity__btn {
	cursor: pointer;
}
</style>