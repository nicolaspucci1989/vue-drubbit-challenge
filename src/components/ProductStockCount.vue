<template>
  <div class="font-weight-thin text--secondary my-3">
    {{units}} {{ msg }}
  </div>
</template>

<script>
export default {
  name: "ProductStockCount",
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return 'variants' in val && Array.isArray(val.variants) &&
            'stock' in val.variants[0] && 'qty' in val.variants[0].stock
      }
    }
  },
  computed: {
    units() {
      return this.product.variants[0].stock.qty
    },
    msg() {
      return this.units === 1 ? 'Unidad disponible' : 'Unidades disponibles'
    }
  }
}
</script>

<style scoped>

</style>
