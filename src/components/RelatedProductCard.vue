<template>
  <v-card
      flat
      class="mx-auto my-12"
      max-width="250"
  >
    <v-img
        width="300"
        src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/44d1d87cd0e622a1f800bbc46dd1aac2ff3143d6.jpg.webp"
    >
      <div
          class="text--white rounded rounded-bl-0 rounded-tr-0 subtitle-1 pa-3 font-weight-bold purple lighten-4 float-left">
        -{{discount}}%
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
export default {
  name: "RelatedProductCard",
  components: { ProductPrice },
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
    discount() {
      return this.product.variants[0].pvPrice.discountPct
    }
  }
}
</script>

<style scoped>

</style>
