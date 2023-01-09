<template>
  <div>
    <div
        class="grey--text text-decoration-line-through"
        v-if="prevPrice"
    >
      <span class="mr-1">$</span>{{ wholePrevPrice }}<sup>{{ decimalPrevPrice }}</sup>
    </div>
    <div class="d-flex align-center">
      <span
          class="font-weight-medium font-size-regular"
          :class="{'font-size-small': small}"
      >
        <span class="mr-1">$</span>{{ wholePrice }}<sup style="font-size: 60%">{{ decimalPrice }}</sup>
      </span>
      <span class="red--text font-weight-bold text-subtitle-2 ml-2" v-if="discount">
          {{ discountPct }}% OFF
        </span>
    </div>
  </div>
</template>

<script>
import { numberFormat } from "@/util";

export default {
  name: "ProductPrice",
  props: {
    product: {
      type: Object,
      required: true,
      validator(val) {
        return 'variants' in val && Array.isArray(val.variants)
      }
    },
    discount: {
      type: Boolean,
      required: false,
      default: false
    },
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    formatNumber(number) {
      return numberFormat.format(number)
    },
    getWholePart(number) {
      return this.formatNumber(number).split(',')[0]
    },
    getDecimalPart(number) {
      return this.formatNumber(number).split(',')[1]
    }
  },
  computed: {
    pvPrice() {
      return this.product.variants[0].pvPrice
    },
    price() {
      return this.pvPrice.price
    },
    prevPrice() {
      return this.pvPrice.prevPrice
    },
    discountPct() {
      return this.pvPrice.discountPct
    },
    wholePrice() {
      return this.getWholePart(this.price)
    },
    decimalPrice() {
      return this.getDecimalPart(this.price)
    },
    wholePrevPrice() {
      return this.getWholePart(this.prevPrice)
    },
    decimalPrevPrice() {
      return this.getDecimalPart(this.prevPrice)
    }
  }
}
</script>

<style scoped lang="sass">
.font-size-regular
  font-size: 1.9rem

.font-size-small
  font-size: 1.3rem
</style>
