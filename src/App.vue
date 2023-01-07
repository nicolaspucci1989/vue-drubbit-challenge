<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
        />

        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ProductPage
          v-if="product !== null"
          :product="product"
      />
      <div v-else class="text-center" style="height: 100vh">
        <v-progress-circular
            class="mt-16"
            :size="70"
            :width="7"
            color="purple"
            indeterminate
        ></v-progress-circular>
      </div>
    </v-main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheFooter from "./components/TheFooter";
import ProductPage from "@/components/ProductPage";
import { getProduct } from "@/api";

const PRODUCT_ID = '039033cd-f096-48ab-9950-0a33a1d2e441'

export default {
  name: 'App',
  components: {
    ProductPage,
    TheFooter,
  },
  data: () => ({
    product: null
  }),
  async created() {
    try {
      this.product = await getProduct(PRODUCT_ID)
    } catch (e) {
      console.log(e)
    }
  }
};
</script>
