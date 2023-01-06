<template>
  <div class="text-center text-md mb-6">
    <div class="text-h6 mb-6 font-weight-bold">{{title}}</div>
    <ul class="pl-0">
      <li class="mb-2" v-for="(item, index) in items" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterLinkList",
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>