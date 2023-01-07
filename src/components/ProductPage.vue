<template>
  <v-container>
    <BuyButton/>
    <v-divider class="mt-6"/>

    <ProductDeliveryInfoGroup/>

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
import ProductDeliveryInfoGroup from "@/components/ProductDeliveryInfoGroup";
import BuyButton from "@/components/BuyButton";

export default {
  name: 'ProductPage',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: { BuyButton, ProductDeliveryInfoGroup, ProductDescription, ProductAttributesList, RelatedProducts },
  data: () => ({}),
  mounted() {
    console.log(this.product)
  }
}
</script>
