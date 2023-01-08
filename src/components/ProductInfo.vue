<template>
  <v-row>
    <v-col cols="10">
      <h1>{{description}}</h1>
      <v-chip color="grey lighten-4" text-color="grey darken-2" small class="font-weight-bold">SKU {{sku}}</v-chip>
      <div class="text-uppercase mt-4 font-weight-bold" style="color: #461e8c">
        {{brand}}
      </div>
    </v-col>
    <v-col cols="2" class="d-flex flex-column">
      <v-btn small depressed fab class="mb-2">
        <v-icon>
          mdi-heart-outline
        </v-icon>
      </v-btn>
      <v-btn small depressed fab class="mb-2">
        <v-icon>
          mdi-share-variant
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductInfo",
  props: {
    description: {
      type: String,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
