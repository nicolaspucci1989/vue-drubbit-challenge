<template>
  <v-card
      flat
      class="mx-auto my-12"
      max-width="250"
  >
    <v-img
        width="300"
        :src="image"
    >
      <div
          class="white--text discount-percent rounded rounded-bl-0 rounded-tr-0 py-3 px-2 font-weight-bold float-left">
        -{{ discountPct }}%
      </div>
      <div class="float-right d-flex align-center justify-center">
        <v-icon>
          mdi-heart-outline
        </v-icon>
      </div>
    </v-img>


    <v-card-text>
      <ProductPrice small :product="product"/>
      <div>{{ name }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn
          color="black lighten-2"
          text
          icon
      >
        <v-icon>mdi-cart-outline</v-icon>
        Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ProductPrice from "@/components/ProductPrice";
import { product } from "@/mixins/product";
export default {
  name: "RelatedProductCard",
  components: { ProductPrice },
  mixins: [product],
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      return this.product.name
    },
    image() {
      return this.product.images[0].square.fullUrl
    }
  }
}
</script>

<style scoped lang="sass">
.discount-percent
  background-color: #9980ce
  font-size: 1.4rem
</style>
