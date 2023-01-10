export const product = {
  computed: {
    discountPct() {
      return this.product.variants[0].pvPrice.discountPct
    }
  }
}
