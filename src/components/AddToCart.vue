<template>
  <div class="add-cart">
    <router-link to="/" class="add-cart--go-back" v-if="isSmallScreens()">Voltar</router-link>
      <ItemList :item="item" class="add-cart--item"/>
      <div class="add-cart--container">
        <span>Quantidade</span>
        <QuantityComponent :item="item" :useStore="false"/> 
      </div>
      <p class="add-cart--observations">Observações:</p>
      <textarea v-model="item.observations" rows="10"></textarea>
      <button class="primary-button" @click="onAddToCartButtonClick">Adicionar ao carrinho</button>
  </div>
</template>

<script>
import Mixin from '@/mixins/mixins'
import axios from 'axios';
import ItemList from './ItemList.vue'
import QuantityComponent from './QuantityComponent.vue';

export default {
  props: ['id'],
  mixins: [Mixin], 
  components: {
    ItemList,
    QuantityComponent,
  },
  data() {
    return {
      item: {},
    }
  },
  created() {
    axios.get(`http://localhost:3000/${this.selectedCategory}/${this.id}`).then( (response) => {
      this.item = { quantity: 1, observations: '', ...response.data }
    })
  },
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory
    }
  },
  methods: {
    onAddToCartButtonClick() {
      this.$store.dispatch('addToCart', this.item)
      this.$router.push({name: 'home'}) // ao clicar em add ao carrinho volta para a tela principal
    }
  }
}
</script>

<style lang="less" scoped>
.add-cart {
  padding: 50px 20px;
  &--go-back {
     font-weight: 600;
     font-size: 18px;
     text-decoration: none;
     color: black;
   }

   &--item {
    margin-top: 50px;
   }

   &--container {
    display: flex;
    border: 3px solid @light-grey;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 20px 0;

      span {
        margin-right: auto;
        font-weight: 600;
        font-size: 16px;
      }
   }

   &--observations {
    font-weight: 600;
    font-size: 16px;
   }

   textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid @light-grey;
   }

    button { 
      width: calc(100% - 40px);
      position: fixed;
      bottom: 30px;
      left: 20px;
      right: 20px;
  }
}
</style>