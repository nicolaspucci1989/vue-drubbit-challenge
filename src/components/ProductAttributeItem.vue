<template>
  <v-col cols="6" sm="4" md="3">
    <div class="font-weight-bold text-uppercase" style="font-size: .8rem">
    {{ name }}
    </div>
    <div class="pt-1 text-subtitle-2">
      {{ value }}
    </div>
  </v-col>
</template>

<script>
export default {
  name: "ProductAttributeItem",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
