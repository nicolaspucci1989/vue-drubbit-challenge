<template>
  <v-sheet
      class="mx-auto"
      max-width="800"
  >
    <v-slide-group
        class="pa-4"
        active-class="success"
    >
      <v-slide-item
          v-for="product in products"
          :key="product.id"
          class="py-1 px-2"
      >
        <RelatedProductCard
          :product="product"
        />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import RelatedProductCard from "@/components/RelatedProductCard";
export default {
  name: "RelatedProductsSlide",
  components: { RelatedProductCard },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
