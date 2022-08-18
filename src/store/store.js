import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    selectedCategory: '',
    cartList: []
  },
  mutations: {
    changeCategory(state, id) {
      state.selectedCategory = id
    },
    addToCart(state, el) {
      state.cartList.push({...el, quantity: el?.quantity || 1}); // adicionando o elemento ao nosso carrinho, e ja começando a quantidade com 1
    },
    increaseQuantity(state, {index, quantity = 1}){
      state.cartList[index].quantity += quantity;
    },
    decreaseQuantity(state, index){
      --state.cartList[index].quantity
    },
    addObservation(state, { index, observations }) {
      state.cartList[index].observations = observations
    },
    removeFromCart(state, index) {
      state.cartList.splice(index, 1) // para ser removido
    }
  },
  actions: {
    changeCategory(context, id) {
      context.commit('changeCategory', id)
    },
    addToCart({state, commit}, el) {
      const cartItem= state.cartList.find(cartItem => cartItem.id === el.id);  // ver se o item ja nao existe na store, ou seja, se ja nao foi adicionado ao carrinho
      if(!cartItem) {
        commit('addToCart', el);
        return
      }
      const index = state.cartList.findIndex(cartItem => cartItem.id === el.id); // se já tem o item, é necessario saber qual o seu index pra poder mandar a quantidade e tbm aumentar a quantidade
      commit('increaseQuantity', { // sendo mandado um obj pro increaseQuantity que possui o index e tbm a quantidade
        index: index, 
        quantity: el?.quantity || 1
      })

      if(el.observations) {
        commit('addObservation', {
          index: index,
          observations: el.observations
        })
      }
      //cartItem ? commit('increaseQuantity', index) : commit('addToCart', el);
    },
    removeFromCart({state, commit}, id) {
      const index = state.cartList.findIndex(cartItem => cartItem.id === id);
      if (index !== 1) commit('removeFromCart', index)
    },
    increaseQuantity({state, commit}, id) {
      const index = state.cartList.findIndex(cartItem => cartItem.id === id);
      commit('increaseQuantity', {index: index});
    },
    decreaseQuantity({state, commit}, id) {
      const index = state.cartList.findIndex(cartItem => cartItem.id === id);
      commit('decreaseQuantity', index);
    },
    addObservation({state, commit}, el) {
      const index = state.cartList.findIndex(cartItem => cartItem.id === el.id);
      commit('addObservation', {
        index: index,
        observations: el.observations
      })
    }
  },
  getters: { // pegar alguma coisa do state
    getCartTotal(state) {
      return state.cartList.reduce( (acc, item) => {
        return acc + (item.price * item.quantity)
      }, 0)
    }
  }
});