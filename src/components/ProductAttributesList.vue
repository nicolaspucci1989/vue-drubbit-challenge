<template>
  <v-col cols="12">
    <h2 class="font-weight-bold pb-4">Caracteristísticas</h2>
    <v-row>
      <ProductAttributeItem
          v-for="attribute in attributes"
          :key="attribute.id"
          v-bind="attribute"
      />
    </v-row>
  </v-col>
</template>

<script>
import ProductAttributeItem from "@/components/ProductAttributeItem";

export default {
  name: "ProductAttributesList",
  components: { ProductAttributeItem },
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return Object.hasOwn(val, 'attrs')
      }
    }
  },
  computed: {
    attributes() {
      return this.product.attrs.map(atr => ({ id: atr.id, name: atr.attrKey.k, value: atr.v }))
    }
  }
}
</script>

<style scoped>

</style>
