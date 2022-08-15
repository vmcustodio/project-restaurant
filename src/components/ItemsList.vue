<template>
  <div class="items-list">
    <Loading-items v-if="isLoading"/>
    <ItemList
      v-for="item in itemsList" :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import axios from 'axios'
import ItemList from './ItemList.vue'
import LoadingItems from './LoadingItems.vue'

export default {
  name: 'ItemsList',
  components: {
    ItemList,
    LoadingItems
  },
  data() {
    return {
      itemsList: [],
      isLoading: false
    }
  },
  created() {
    this.getItemsList();
  },
  computed: {
    selectedCategory() {
      return this.$store.state.selectedCategory
    }
  },
  methods: {
    getItemsList() {
      this.isLoading = true;
      this.itemsList = []; // para não ocorrer de aparecer o loading junto com os produtos 
      setTimeout(() => {
        axios.get(`http://localhost:3000/${this.selectedCategory}`).then( (response) => {
            this.itemsList = response.data
            this.isLoading = false
        })
      }, 1000) 
    }
  },
  watch: {
    selectedCategory() { // toda vez que mudar o selectedCategory será chamado esse metodo e feito uma nova busca nos itens
      this.getItemsList()
    }
  }
}
</script>

<style lang="less" scoped>
  .items-list {
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media @tablets {
      flex-wrap: wrap;
      margin: 0px;
      padding: 20px;
    }
  }
</style>

