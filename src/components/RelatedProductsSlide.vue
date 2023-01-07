<template>
  <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
        show-arrows
    >
      <v-slide-item
          v-for="n in 15"
          :key="n"
      >
        <RelatedProductCard/>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import RelatedProductCard from "@/components/RelatedProductCard";
export default {
  name: "RelatedProductsSlide",
  components: { RelatedProductCard },
  data: () => ({
    model: null,
  }),
}
</script>

<style scoped>

</style>
