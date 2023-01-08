<template>
  <v-container class="px-8 white">
    <v-row>
      <!--Desktop view-->
      <v-col cols="12" md="7" v-if="$vuetify.breakpoint.mdAndUp">
        <ProductDescription
            :description="description"
        />
        <ProductAttributesList
            :attributes="attributes"
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
        <div class="pt-2 pb-3">
          <ProductStockInfo
              availability="inStock"
              class="py-1"
          />
          <ProductPaymentOptions class="mt-2"/>
        </div>
        <div class="py-3" style="border-top: 1px solid #e0e0e0">
          <ProductQuantityCounter :max="3"/>
          <div class="font-weight-thin text--secondary my-3">
            3 Unidades disponibles
          </div>
          <BuyButton/>
        </div>
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
import ProductPaymentOptions from "@/components/ProductPaymentOptions";

export default {
  name: 'ProductPage',
  props: {
    productData: {
      type: Object,
      required: true
    }
  },
  components: {
    ProductPaymentOptions,
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
  computed: {
    product() {
      return this.productData.data.product
    },
    description() {
      return this.product.info.templateData.description
    },
    attributes() {
      return this.product.attrs.map(atr => ({id: atr.id, name: atr.attrKey.k, value: atr.v}))
    }
  }
}
</script>
