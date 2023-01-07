<template>
  <div>
    <div class="grey--text text-decoration-line-through" v-if="prevPrice">
      <span class="mr-1">$</span>{{wholePrevPrice}}<sup>{{decimalPrevPrice}}</sup>
    </div>
    <div class="d-flex align-center">
      <span style="font-size: 1.9rem" class="font-weight-medium">
        <span class="mr-1">$</span>{{wholePrice}}<sup style="font-size: 60%">{{decimalPrice}}</sup>
      </span>
      <span class="red--text font-weight-bold text-subtitle-2 ml-2" v-if="discountPct">
          {{discountPct}}% OFF
        </span>
    </div>
  </div>
</template>

<script>
import { numberFormat } from "@/util";

export default {
  name: "ProductPrice",
  props: {
    price: {
      type: Number,
      required: true
    },
    prevPrice: {
      type: Number,
    },
    discountPct: {
      type: Number,
      required: false,
      validator(val) {
        return val > 0 && val < 100
      }
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

<style scoped>

</style>
