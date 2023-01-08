<template>
  <div class="text-center text-md-start mb-6">
    <div class="text-h6 mb-6 font-weight-bold">{{title}}</div>
    <ul class="pl-0">
      <li class="mb-2" v-for="(item, index) in items" :key="index"><a href="">{{item}}</a></li>
    </ul>
    <slot></slot>
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

<style scoped lang="sass">
a:hover
  color: #f6303e!important
</style>
