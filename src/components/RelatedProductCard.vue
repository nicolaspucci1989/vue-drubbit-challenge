<template>
  <v-card
      flat
      max-width="250"
      class="cursor-pointer"
      @click="goToProduct"
  >
    <div
        class="white--text discount-percent rounded rounded-bl-0 rounded-tr-0 py-3 px-2 font-weight-bold float-left">
      -{{ discountPct }}%
    </div>
    <div class="float-right d-flex align-center justify-center my-5 mr-5">
      <v-icon>
        mdi-heart-outline
      </v-icon>
    </div>

    <v-img
        width="300"
        :src="image"
    >
      <v-img
          v-if="hasMultipleImages"
          width="300"
          :src="secondaryImage"
          class="secondary-image"
      >
      </v-img>
    </v-img>

    <v-card-text>
      <ProductPrice small :product="product"/>
      <div>{{ name }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions
        class="d-flex justify-center"
    >
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
  methods: {
    goToProduct() {
      // TODO: go to product route
      console.log(this.productUrlName)
    }
  },
  computed: {
    name() {
      return this.product.name
    },
    image() {
      return this.product.images[0].square.fullUrl
    },
    secondaryImage() {
      return this.product.images[1].square.fullUrl
    },
    hasMultipleImages() {
      return this.product.images.length > 1
    },
    productUrlName() {
      return this.product.urlName
    },

  }
}
</script>

<style scoped lang="sass">
.discount-percent
  background-color: #9980ce
  font-size: 1.4rem

.secondary-image
  opacity: 0
  transition: all .3s
  &:hover
    opacity: 1
</style>
