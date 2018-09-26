
import products from './../../../../service/json/produtos.json';

const actions = {
  GET_PRODUCTS({commit}) {
    return new Promise(() => {
      setTimeout(() => {
        commit('SET_PRODUCTS', {
          products
        })
      }, 2000);
    })
  }
}
// Export
export default actions;