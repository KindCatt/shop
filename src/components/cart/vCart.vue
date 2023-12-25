<template>
	<div class="v-cart">
		<!-- <router-link
				to="/">
			<div class="v-cart__link-to-cart">Вернуться в каталог</div>
		</router-link> -->
		
		<h1>Корзина</h1>
		<p
				v-if="!cart_data.length">Нет товаров</p>

		<v-cart-item
				v-for="(item, index) in cart_data" :key="item.article"
				:cart_item_data="item"
				@decrement="decrement(index)"
				@increment="increment(index)"
				@deleteFromCart="deleteFromCart(index)"/>

				<div class="v-cart__total">
					<p class="v-cart__total-name">Общая стоимость:</p>
					<p>{{ cartTotalCost }}р.</p>
				</div>
		</div>
</template>

<script>
import vCartItem from '@/components/cart/vCartItem.vue'
import { mapActions } from 'vuex'

export default {
	name: 'vCart',
	components: {
		vCartItem
	},

	props: {
		cart_data: {
			type: Array,
			default() {
				return []
			}
		}
	},
	
	data() {
		return {
			
		}
	},

	computed: {
		cartTotalCost() {
			let result = [];

			if (this.cart_data.length) {
			
				for (let item of this.cart_data) {
					result.push(item.price * item.quantity)
				}

				result = result.reduce(function(sum, el) {
					return sum + el
				})
				return result;
			} else {
				return 0
			}
		}
	},
	
	methods: {
		...mapActions([
			'DECREMENT_CART_ITEM',
			'INCREMENT_CART_ITEM',
			'DELETE_FROM_CART',
		]),

		decrement(index) {
			this.DECREMENT_CART_ITEM(index)
		},
		increment(index) {
			this.INCREMENT_CART_ITEM(index)
		},
		
		deleteFromCart(index) {
			this.DELETE_FROM_CART(index)
		}
	}
}
</script>

<style lang="scss" scoped>
.v-cart {
	margin-bottom: 100px;
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
	&__total {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		padding: 16px 24px;
		background-color: #26ae68;
		color: #ffffff;
		font-size: 20px;
	}
	&__total-name {
		margin-right: 16px;
	}
}
</style>