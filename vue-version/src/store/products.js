// import Vue from "vue";
import tshirts from './data/tshirts'

export default {
  namespaced: true,
  state: {
    products: [...tshirts],
    selectedBrands: [],
    selectedColors: [],
    selectedPrice: null
  },
  getters: {
    brands: ({ products }) => [...new Set(products.map(p => p.brand))],

    selectedBrands: ({ selectedBrands }) => selectedBrands,

    colors: state => [
      ...new Set(
        state.products.reduce((acc, p) => {
          acc.push(p.colors.map(c => c))
          return acc.flat()
        }, [])
      )
    ],

    selectedColors: ({ selectedColors }) => selectedColors,

    maxPrice: () => [...tshirts].sort((a, b) => b.price - a.price)[0].price,

    minPrice: () => [...tshirts].sort((a, b) => a.price - b.price)[0].price,

    all: ({ products }) => products
  },
  mutations: {
    filterProducts: state => {
      const {
        selectedBrands: sB,
        selectedPrice: sP,
        selectedColors: sC
      } = state

      const byPrice = p => (sP ? p.price <= sP : true)

      const byColor = p =>
        sC.length ? p.colors.some(c => sC.includes(c)) : true

      const byBrand = p => (sB.length ? sB.includes(p.brand) : true)

      state.products = tshirts
        .filter(byPrice)
        .filter(byColor)
        .filter(byBrand)
    },

    setSelectedBrands({ selectedBrands }, brand) {
      const index = selectedBrands.indexOf(brand)
      index === -1
        ? selectedBrands.push(brand)
        : selectedBrands.splice(index, 1)
      this.commit('products/filterProducts')
    },

    setSelectedColors({ selectedColors }, color) {
      const index = selectedColors.indexOf(color)
      index === -1
        ? selectedColors.push(color)
        : selectedColors.splice(index, 1)
      this.commit('products/filterProducts')
    },

    setMaxPrice(state, maxPrice) {
      state.selectedPrice = maxPrice
      this.commit('products/filterProducts')
    },

    setInitialProducts(state) {
      state.selectedBrands = []
      state.selectedColors = []
      state.selectedPrice = null
      state.products = [...tshirts]
    }
  },
  action: {
    // todo : use actions when using a proper backend app to host the products
  }
}
