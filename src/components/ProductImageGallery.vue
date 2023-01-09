<template>
  <div>
    <Flicking
        ref="flicking"
        :options="options"
        v-if="images.length > 0"
    >
      <v-img
          v-for="image in images"
          :key="image.id"
          :src="image.fullUrl"
      />
    </Flicking>
  </div>
</template>

<script>
import {Flicking} from "@egjs/vue-flicking";

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
        panelsPerView: 1,
        defaultIndex: 0,
        align: 'center'
      },
    }
  },
  computed: {
    images() {
      return this.product.images.map(i => i.medium)
    }
  },
}
</script>

<style lang="sass">
@import url("@egjs/vue-flicking/dist/flicking.css")

</style>
