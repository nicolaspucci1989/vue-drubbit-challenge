<template>
  <div>

    <Flicking :options="{ align: 'prev'}">
      <v-img
          src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/20026dc03ccdf20985fdf25cb4ffbe6639be2820.jpg.webp"
          @click="dialog = true"
      />
      <v-img
          src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/d606282f31e13165c3c89f8abdc6458d70dca935.jpg.webp"
          @click="dialog = true"
      />
    </Flicking>
    <v-dialog
        width="100%"
        dark
        v-model="dialog"
    >
        <v-col class="fill-height d-flex justify-center align-center flex-column">
          <v-img
              contain
              src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/9a79708a6f9be82e517d59841067435785a7919c.jpg.webp"
          />
        </v-col>
    </v-dialog>
  </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
  name: "ProductRelatedGallery",
  components: { Flicking },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="sass">
@import url("@egjs/vue-flicking/dist/flicking.css")
</style>
