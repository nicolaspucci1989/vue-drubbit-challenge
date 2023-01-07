<template>
  <v-col cols="6">
    <div class="font-weight-bold text-uppercase font-0 quarter--text">
    {{ name }}
    </div>
    <div class="pt-1">
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
