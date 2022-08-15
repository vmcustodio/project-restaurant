<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back">Voltar</router-link>
    <h2 class="cart--title">Seu pedido</h2>
    <CartItem v-for="item in cartList" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  name: 'CartComponent',
  components: {
    CartItem
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  background: white;
  min-width: 643px;
  width: 643px;
  padding: 50px;

  &--go-back {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
  }

  &--title {
    font-weight: 600px;
    font-size: 24px;
    margin-top: 50px;
  }

  @media @tablets {
    width: 100%;
    min-width: unset;
    padding: 50px 20px 20px;
  }
}
</style>