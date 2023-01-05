<template>
  <div class="text-center">
    <div>{{title}}</div>
    <ul class="pl-0">
      <li v-for="(item, index) in items" :key="index">{{item}}</li>
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