<template>
  <div>
    <h1>Products List</h1>
    <ul>
      <li v-for="product in productStore.products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Stock: {{ product.stock }}</p>
      </li>
    </ul>
    <button @click="addNewProduct">Add New Product</button>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/product'

const productStore = useProductStore()

const addNewProduct = () => {
  const newProduct = {
    id: Date.now(),
    name: 'Tablet',
    description: 'A new tablet with the latest features.',
    price: 399.99,
    stock: 30,
  }

  productStore.addProduct(newProduct)
}
</script>

<style lang="scss" scoped></style>
