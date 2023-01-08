<template>
  <v-container class="px-8 white">
    <v-row>
      <!--Desktop view-->
      <v-col cols="12" md="7" v-if="$vuetify.breakpoint.mdAndUp">
        <ProductDescription
            :description="product.description"
        />
        <ProductAttributesList
            :attributes="product.attributes"
        />
      </v-col>

      <v-col cols="12" md="5">
        <ProductPageBreadcrumbs/>
        <ProductInfo
            description="Inodoro Corto Ihcmjb Ferrum Marina"
            brand="Ferrum"
            sku="FER00048"
        />
        <ProductPrice
            :discount-pct="20"
            :prev-price="150774.45"
            :price="120619.56"
        />
       <ProductStockInfo
           availability="inStock"
           class="py-1"
       />
        <div>
          <v-icon>
            mdi-credit-card
          </v-icon>
          Hasta 18 cuotas sin interes
        </div>
        <ProductQuantityCounter :max="3"/>
        <div class="font-weight-thin text--secondary my-3">
          3 Unidades disponibles
        </div>
        <BuyButton/>
        <v-divider class="mt-6"/>

        <ProductDeliveryInfoGroup/>
      </v-col>

      <!-- Mobile View-->
      <v-col cols="12" md="7" v-if="$vuetify.breakpoint.smAndDown">
        <ProductDescription
            :description="product.description"
        />
        <ProductAttributesList
            :attributes="product.attributes"
        />
      </v-col>
    </v-row>

    <RelatedProducts/>
  </v-container>
</template>

<script>
import RelatedProducts from "@/components/RelatedProducts";
import ProductAttributesList from "@/components/ProductAttributesList";
import ProductDescription from "@/components/ProductDescription";
import ProductDeliveryInfoGroup from "@/components/ProductDeliveryInfoGroup";
import BuyButton from "@/components/BuyButton";
import ProductQuantityCounter from "@/components/ProductQuantityCounter";
import ProductPrice from "@/components/ProductPrice";
import ProductPageBreadcrumbs from "@/components/ProductPageBreadcrumbs";
import ProductInfo from "@/components/ProductInfo";
import ProductStockInfo from "@/components/ProductStockInfo";

export default {
  name: 'ProductPage',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    ProductStockInfo,
    ProductInfo,
    ProductPageBreadcrumbs,
    ProductPrice,
    ProductQuantityCounter,
    BuyButton,
    ProductDeliveryInfoGroup,
    ProductDescription,
    ProductAttributesList,
    RelatedProducts
  },
  data: () => ({}),
  mounted() {
    console.log(this.product)
  }
}
</script>
