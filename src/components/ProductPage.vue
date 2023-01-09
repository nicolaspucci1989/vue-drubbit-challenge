<template>
  <v-container class="px-8 white">
    <v-row>
      <!--Desktop view-->
      <v-col cols="12" md="7" v-if="$vuetify.breakpoint.mdAndUp">
        <ProductDescription
            :product="productData.product"
        />
        <ProductAttributesList
            :product="productData.product"
        />
      </v-col>

      <v-col cols="12" md="5">
        <ProductPageBreadcrumbs/>
        <ProductInfo
            :product="productData.product"
        />
        <ProductPrice
            :product="productData.product"
            discount
        />
        <div class="pt-2 pb-3">
          <ProductStockInfo
              :product="productData.product"
              class="py-1"
          />
          <ProductPaymentOptions class="mt-2"/>
        </div>
        <div class="py-3" style="border-top: 1px solid #e0e0e0">
          <ProductQuantityCounter :product="productData.product"/>
          <ProductStockCount
              :product="productData.product"
          />
          <BuyButton/>
        </div>
        <v-divider class="mt-6"/>

        <ProductDeliveryInfoGroup/>
      </v-col>

      <!-- Mobile View-->
      <v-col cols="12" md="7" v-if="$vuetify.breakpoint.smAndDown">
        <ProductDescription
            :product="productData.product"
        />
        <ProductAttributesList
            :product="productData.product"
        />
      </v-col>
    </v-row>

    <RelatedProducts
        v-if="productData.relatedProducts.length > 0"
        :products="productData.relatedProducts"
    />
  </v-container>
</template>

<script>
/* eslint-disable */
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
import ProductStockCount from "@/components/ProductStockCount";

export default {
  name: 'ProductPage',
  props: {
    productData: {
      type: Object,
      required: true,
      validator(val) {
        return 'product' in val && 'relatedProducts' in val
        && Array.isArray(val.relatedProducts)
      }
    }
  },
  components: {
    ProductStockCount,
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
}
</script>
