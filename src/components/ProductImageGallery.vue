<template>
  <div>
    <Flicking
        ref="flicking0"
        :options="optionsBig"
        v-if="images.length > 0"
        :plugins="plugins"
    >
      <v-img
          class="flicking-panel"
          v-for="image in images"
          :key="image.id"
          :src="image.fullUrl"
      />
    </Flicking>
    <Flicking
        ref="flicking1"
        :options="optionsSmall"
        v-if="images.length > 0"
    >
      <v-img
          class="flicking-panel thumb mx-2"
          v-for="(thumb, i) in thumbs"
          :key="thumb.id"
          :src="thumb.fullUrl"
          @mouseover="onMouseOverThumb(i)"
      />
    </Flicking>
  </div>
</template>

<script>
import {Flicking} from "@egjs/vue-flicking";
import { Sync } from "@egjs/flicking-plugins";

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
      optionsBig: {
        panelsPerView: 1,
        defaultIndex: 0,
        align: 'center',
      },
      optionsSmall: {
        bound: true,
        bounce: 30,
        moveType: 'freeScroll',
      },
      plugins: []
    }
  },
  mounted() {
    this.plugins = [new Sync({
      type: "index",
      synchronizedFlickingOptions: [
        {
          flicking: this.$refs.flicking0,
          isSlidable: true
        },
        {
          flicking: this.$refs.flicking1,
          isClickable: true,
          activeClass: "active"
        }
      ]
    })];
  },
  computed: {
    images() {
      return this.product.images.map(i => i.medium)
    },
    thumbs() {
      return this.product.images.map(i => i.thumb)
    }
  },
  methods: {
    onMouseOverThumb(index) {
      const duration = 0
      return this.$refs.flicking0.moveTo(index, duration)
          .catch()
    }
  }
}
</script>

<style lang="sass">
@import url("@egjs/vue-flicking/dist/flicking.css")

.flicking-panel
  &.thumb
    border-radius: 10px
    padding: 2px

.active
  border: 2px solid #461e8c

</style>
