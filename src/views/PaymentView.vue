<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--go-back">←️ Voltar</router-link>
      <OrderComponent/>
    </div>
    <CartComponent class="cart-menu" />
  </div>
</template>

<script>
import Mixin from '@/mixins/mixins'
import CartComponent from '@/components/CartComponent.vue'
import OrderComponent from '@/components/OrderComponent.vue'

export default {
 name: 'PaymentView',
 mixins: [Mixin],
 components: {
  CartComponent,
  OrderComponent
}
}
</script>

<style lang="less" scoped>
.payment {
  display: flex;
  &--content {
    flex-grow: 1;
    padding: 50px;
    
    .payment--go-back {
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;
      color: black;
    }
  }

  @media @small-desktops {
    .cart-menu {
      display: none;
    }

    &--content {
      padding: 50px 20px;
    }
  }
}
</style>