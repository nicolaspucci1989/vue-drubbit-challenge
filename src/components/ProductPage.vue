<template>
  <v-container>
    <RelatedProducts/>
  </v-container>
</template>

<script>
  import RelatedProducts from "@/components/RelatedProducts";

  export default {
    name: 'ProductPage',
    components: { RelatedProducts },
    data: () => ({}),
  }
</script>
