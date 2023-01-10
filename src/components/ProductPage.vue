<template>
  <div>

    <v-container class="px-8 white" style="max-width: 1247px">
      <v-row>
        <!--Desktop view-->
        <v-col
            cols="12"
            md="7"
            class="pa-12"
            v-if="$vuetify.breakpoint.mdAndUp"
        >
          <ProductDescription
              :product="productData.product"
          />
          <ProductAttributesList
              :product="productData.product"
          />
        </v-col>

        <v-col cols="12" md="5">
          <ProductImageGallery
              :product="productData.product"
          />
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
            <ProductQuantityCounter
                :product="productData.product"
            />
            <ProductStockCount
                :product="productData.product"
            />
            <BuyButton/>
          </div>
          <v-divider class="mt-6"/>

          <ProductDeliveryInfoGroup/>
        </v-col>

        <!-- Mobile View-->
        <v-col
            cols="12"
            md="7"
            class="pa-12"
            v-if="$vuetify.breakpoint.smAndDown"
        >
          <ProductDescription
              :product="productData.product"
          />
          <ProductAttributesList
              :product="productData.product"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-12">
      <RelatedProducts
          v-if="productData.relatedProducts.length > 0"
          :products="productData.relatedProducts"
      />
    </v-container>
  </div>

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
import ProductStockCount from "@/components/ProductStockCount";
import ProductImageGallery from "@/components/ProductImageGallery.vue";

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
    ProductImageGallery,
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
