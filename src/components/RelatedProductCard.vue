<template>
  <v-card
      :loading="loading"
      flat
      class="mx-auto my-12"
      max-width="250"
  >
    <v-img
        width="300"
        src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/44d1d87cd0e622a1f800bbc46dd1aac2ff3143d6.jpg.webp"
    >
      <div
          class="text--white rounded rounded-bl-0 rounded-tr-0 subtitle-1 pa-3 font-weight-bold purple lighten-4 float-left">
        -20%
      </div>
      <div class="float-right d-flex align-center justify-center">
        <v-icon>
          mdi-heart-outline
        </v-icon>
      </div>
    </v-img>


    <v-card-text>
      <div>
        <div class="grey--text ms-3 text-decoration-line-through">
          $ 82.234,23
        </div>
        <div class="black--text grey--text ms-3 text-h6">
          $ 18.234,23
        </div>
      </div>
      <div> Columna Mayo - Andina - Florencia - Traful - Olivos Ctfb Ferrum</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-center">
      <v-btn
          color="black lighten-2"
          text
          @click="reserve"
          icon
      >
        <v-icon>mdi-cart-outline</v-icon>
        Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

</style>
