<template>
  <div class="payment">
    <div class="payment--content">
      <router-link to="/" class="payment--go-back">←️ Voltar</router-link>
    </div>
    <CartComponent v-if="isDesktop()" />
  </div>
</template>

<script>
import Mixin from '@/mixins/mixins'
import CartComponent from '@/components/CartComponent.vue'

export default {
 name: 'PaymentView',
 mixins: [Mixin],
 components: {
  CartComponent
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
}
</style>