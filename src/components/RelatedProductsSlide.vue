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
<!--      <v-btn icon class="navigation-arrow left white&#45;&#45;text" x-large elevation="10">-->
<!--        <v-icon>-->
<!--          mdi-chevron-left-->
<!--        </v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn icon class="navigation-arrow right white&#45;&#45;text" x-large elevation="10">-->
<!--        <v-icon>-->
<!--          mdi-chevron-right-->
<!--        </v-icon>-->
<!--      </v-btn>-->
    </Flicking>
  </v-sheet>
</template>

<script>
import RelatedProductCard from "@/components/RelatedProductCard";
import { Flicking } from "@egjs/vue-flicking";
import { Arrow } from "@egjs/flicking-plugins";
const plugins = [new Arrow({})]
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
    return {plugins}
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
  width: 55px
  height: 55px

  &.left
    left: 30px
  &.right
    right: 30px
</style>
