<template>
  <div class="d-flex">
    <div class="d-flex py-1 align-center counter-container">
      <v-btn icon @click="decrement">
        <v-icon color="grey lighten-1">
          mdi-minus
        </v-icon>
      </v-btn>
      <div class="counter-text text-center">
        {{count}} unidad{{count > 1 ? 'es' : ''}}
      </div>
      <v-btn icon @click="increment">
        <v-icon color="grey lighten-1">
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductQuantityCounter",
  props: {
    max: {
      type: Number,
      required: true,
      validator(val) {
        return val > 0
      }
    }
  },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      if (this.count < this.max) {
        this.count += 1
      }
    },
    decrement() {
      if (this.count > 1) {
        this.count -= 1
      }
    }
  }
}
</script>

<style scoped lang="sass">
.counter-container
  border: 1px solid #d3d3d3

.counter-text
    width: 120px
</style>
