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
    attributes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
