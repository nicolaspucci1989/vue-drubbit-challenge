<template>
  <v-btn
      block large rounded icon elevation="1"
      class="buy-btn pink lighten-4 font-weight-black"
  >
    <v-icon class="text-h6">mdi-cart-plus</v-icon>
    Comprar Ahora
  </v-btn>
</template>

<script>
export default {
  name: "BuyButton"
}
</script>

<style scoped lang="sass">
.buy-btn:hover
  background-color: #461e8c!important
  color: white
  transition: all .25s
</style>
