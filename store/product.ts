import { defineStore } from 'pinia'

interface Product {
  id: number
  name: string
  description: string
  price: number
  stock: number
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Laptop',
        description: 'A powerful laptop for work and play.',
        price: 999.99,
        stock: 25,
      },
      {
        id: 2,
        name: 'Smartphone',
        description: 'A latest-generation smartphone with amazing features.',
        price: 699.99,
        stock: 50,
      },
    ] as Product[],
  }),

  actions: {
    addProduct(product: Product) {
      this.products.push(product)
    },
  },
  getters: {
    inStockProducts(state) {
      return state.products.filter((product) => product.stock > 0)
    },
  },
})
