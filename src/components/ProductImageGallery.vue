<template>
  <div>
      <Flicking
          :options="options"
      >
        <div
            v-for="image in images"
            :key="image.id"
        >
          <v-img :src="image.fullUrl"/>
        </div>
      </Flicking>

<!--    <Flicking-->
<!--        ref="flicking1"-->
<!--        :options="{ bound: true, bounce: 30, moveType: 'freeScroll' }"-->
<!--    >-->
<!--      <div-->
<!--          class="flicking-panel thumb has-background-primary"-->
<!--          v-for="image in images"-->
<!--          :key="image.id"-->
<!--      >-->
<!--        <img class="thumb-image" :src="image.fullUrl"/>-->
<!--      </div>-->
<!--    </Flicking>-->
  </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
// import { Sync } from "@egjs/flicking-plugins";

export default {
  name: "ProductImageGallery",
  components: {Flicking},
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return 'images' in val
      }
    }
  },
  data() {
    return {
      options: {
        align: 'prev'
      },
      plugins: []
    }
  },
  computed: {
    images() {
      return this.product.images.map(i => i.medium)
    }
  },
  // mounted() {
  //   this.plugins = [new Sync({
  //     type: "index",
  //     synchronizedFlickingOptions: [
  //       {
  //         flicking: this.$refs.flicking0,
  //         isSlidable: true
  //       },
  //       {
  //         flicking: this.$refs.flicking1,
  //         isClickable: true,
  //         activeClass: "active"
  //       }
  //     ]
  //   })];
  // }
}
</script>

<style scoped lang="sass">
@import url("@egjs/vue-flicking/dist/flicking.css")

</style>
