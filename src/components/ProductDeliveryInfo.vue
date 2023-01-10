<template>
    <div class="mb-4">
      <div class="d-flex align-start mr-2">
        <v-card
            outlined
            class="delivery-icon-card mr-2 rounded d-flex justify-center align-center"
        >
          <v-icon class="delivery-icon ma-2">{{icon}}</v-icon>
        </v-card>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductDeliveryInfo",
  props: {
    icon: {
      type: String,
      required: true,
      validator(val) {
        return val.indexOf('mdi-') !== -1
      }
    }
  }
}
</script>

<style scoped lang="sass">
.delivery-icon-card
  width: 40px
  border: 2px solid #2e1a46

.delivery-icon
  color: #5b23be
  font-size: 40px
</style>
