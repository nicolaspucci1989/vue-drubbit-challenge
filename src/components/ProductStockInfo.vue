<template>
  <div>
    <v-icon class="mr-2">{{icon}}</v-icon>{{inStock}}
  </div>
</template>

<script>
export default {
  name: "ProductStockInfo",
  props: {
    availability: {
      type: String,
      required: true
    }
  },
  computed: {
    isAvailable() {
      return this.availability === 'inStock'
    },
    icon() {
      return this.isAvailable ? 'mdi-check' : 'mdi-close'
    },
    inStock() {
      return this.isAvailable ? 'Disponible en stock' : 'Producto sin stock'
    }
  }
}
</script>

<style scoped>

</style>
