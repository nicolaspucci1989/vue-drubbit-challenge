<template>
  <v-container>
    <ProductDescription
        :description="product.description"
    />
    <ProductAttributesList
        :attributes="product.attributes"
    />
    <RelatedProducts/>
  </v-container>
</template>

<script>
  import RelatedProducts from "@/components/RelatedProducts";
  import ProductAttributesList from "@/components/ProductAttributesList";
  import ProductDescription from "@/components/ProductDescription";

  export default {
    name: 'ProductPage',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: { ProductDescription, ProductAttributesList, RelatedProducts },
    data: () => ({}),
    mounted() {
      console.log(this.product)
    }
  }
</script>
