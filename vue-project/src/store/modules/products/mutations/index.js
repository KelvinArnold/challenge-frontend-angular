const mutations = {
  SET_PRODUCTS: (scope, { products }) => {
    scope.products = products;
  },
  SET_LOADING: (scope, { loading }) => {
    scope.loading = loading;
  },
}
// Export
export default mutations;