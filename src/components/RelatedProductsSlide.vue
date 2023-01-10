<template>
  <v-sheet
      class="mx-auto carousel-container"
  >
    <Flicking
        class="pa-4"
        active-class="success"
        :options="{align: 'prev'}"
        :plugins="plugins"
    >
      <RelatedProductCard
          class="mx-2"
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
      <span slot="viewport" class="flicking-arrow-prev navigation-arrow left is-circle elevation-10"></span>
      <span slot="viewport" class="flicking-arrow-next navigation-arrow right is-circle elevation-10"></span>
    </Flicking>
  </v-sheet>
</template>

<script>
import RelatedProductCard from "@/components/RelatedProductCard";
import { Flicking } from "@egjs/vue-flicking";
import { Arrow } from "@egjs/flicking-plugins";

export default {
  name: "RelatedProductsSlide",
  components: { RelatedProductCard, Flicking },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      plugins: []
    }
  },
  mounted() {
    this.plugins = [new Arrow({
      disabledClass: 'd-none'
    })]
  }
}
</script>

<style scoped lang="sass">
@import url("@egjs/vue-flicking/dist/flicking.css")
@import url("@egjs/flicking-plugins/dist/flicking-plugins.css")

.carousel-container
  background-color: transparent

.navigation-arrow
  background-color: #2e1a46

  &.left
    left: 30px
  &.right
    right: 30px
</style>
