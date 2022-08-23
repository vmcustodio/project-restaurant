<template>
  <div class="cart">
    <router-link to="/" class="cart--go-back">Voltar</router-link>
    <h2 class="cart--title">Seu pedido</h2>
    <div class="cart--content">
      <p v-if="hasNoItem">Seu carrinho ainda está vazio.</p>
      <transition-group name="list">
        <CartItem v-for="item in cartList" :key="item.id" :item="item"/>
      </transition-group>
    </div>
    <div class="cart--total" v-if="!hasNoItem">
      <span>Total: </span>
      <span class="price">{{ getCartTotal | currency }}</span>
    </div>
    <button class="primary-button payment-button" @click="goToPayment" v-if="cartList.length && !isPaymentScreen">Finalizar compra</button>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import { mapGetters } from 'vuex'
import Mixin from '@/mixins/mixins'

export default {
  name: 'CartComponent',
  mixins: [Mixin],
  components: {
    CartItem,
  },
  filters: {
    currency(value) {
      return `R$ ${value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
    }
  },
  computed: {
    ...mapGetters(['getCartTotal']),
    cartList() {
      return this.$store.state.cartList;
    },
    hasNoItem() {
      return !this.cartList.length;
    },
    isPaymentScreen() {
      return this.$route.name === 'payment'
    }
  },
  methods: {
    goToPayment() {
      this.$router.push({name: 'payment'})
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  background: white;
  min-width: 600px;
  height: 100vh;
  width: 600px;
  padding: 30px 30px 100px 30px;
  display: flex;
  flex-direction: column;

  &--go-back {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: none;
  }

  &--title {
    font-weight: 600px;
    font-size: 24px;
    margin-top: 50px;
  }

  &--content {
    flex-grow: 1;
    overflow: auto; // para usar precisa ter os valores de width e height definidos
  }

  &--total {
    font-weight: 600;
    font-size: 18px;
    text-align: right;
    margin-top: 30px;

    .price {
      color: @yellow;
      padding-left: 10px;
    }
  }

  .payment-button {
    width: 397px;
    margin: 20px auto;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  @media @small-desktops {
    width: 100%;
    max-width: 800px;
    margin: auto;
    min-width: unset;
    padding: 50px 20px 20px;

    .payment-button {
      width: 100%;
    }

    &--go-back {
      display: block;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
      color: black;
    }
  }
}
</style>