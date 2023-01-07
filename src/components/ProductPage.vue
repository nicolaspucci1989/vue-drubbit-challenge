<template>
  <v-container>
    <ProductAttributesList
        :attributes="product.attributes"
    />
    <RelatedProducts/>
  </v-container>
</template>

<script>
  import RelatedProducts from "@/components/RelatedProducts";
  import ProductAttributesList from "@/components/ProductAttributesList";

  export default {
    name: 'ProductPage',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: { ProductAttributesList, RelatedProducts },
    data: () => ({}),
    mounted() {
      console.log(this.product)
    }
  }
</script>
