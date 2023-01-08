<template>
  <v-col cols="12">
    <div class="text-h5 font-weight-bold pb-4">Descripción</div>
    <div class="text-pre-line">
      {{ description }}
    </div>
  </v-col>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return Object.hasOwn(val, 'info')
      }
    }
  },
  computed: {
    description() {
      return this.product.info.templateData.description
    }
  }
}
</script>

<style scoped>

</style>
