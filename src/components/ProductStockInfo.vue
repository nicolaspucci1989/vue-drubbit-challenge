<template>
  <div>
    <v-icon class="mr-2">{{ icon }}</v-icon>
    {{ inStock }}
  </div>
</template>

<script>
export default {
  name: "ProductStockInfo",
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return 'variants' in val && Array.isArray(val.variants)
        && 'stock' in val.variants[0]
      }
    }
  },
  computed: {
    availability() {
      return this.product.variants[0].stock.availability
    },
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
