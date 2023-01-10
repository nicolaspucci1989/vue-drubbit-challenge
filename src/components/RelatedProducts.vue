<template>
  <div>
    <div class="d-flex justify-center">
    <h1 class="underline text-uppercase font-weight-medium text-center pb-1">
      Tambien te puede interesar
    </h1>
    </div>
    <RelatedProductsSlide
        :products="products"
    />
  </div>
</template>

<script>
import RelatedProductsSlide from "@/components/RelatedProductsSlide";
export default {
  name: "RelatedProducts",
  components: { RelatedProductsSlide },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">

h1
  font-size: 1.36rem
  color: #f6303e
  &.underline
    border-bottom: 1px solid
</style>
