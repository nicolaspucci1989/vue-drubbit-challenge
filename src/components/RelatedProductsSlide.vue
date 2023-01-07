<template>
  <v-sheet
      class="mx-auto"
      max-width="800"
  >
    <v-slide-group
        v-model="model"
        class="pa-4"
        active-class="success"
    >
      <v-slide-item
          v-for="n in 15"
          :key="n"
          class="py-1 px-2"
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
