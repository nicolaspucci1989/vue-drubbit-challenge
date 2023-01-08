<template>
  <div class="d-flex justify-center justify-md-start">
    <v-btn
        v-for="link in links"
        :key="link.url"
        fab small color="secondary"
        class="mr-2"
    >
      <v-icon>{{link.icon}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "FooterSocials",
  data() {
    return {
      links: [
        {
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/materiales_basualdo/'
        },
        {
          icon: 'mdi-facebook',
          url: 'https://www.facebook.com/MaterialesBasualdo'
        },
        {
          icon: 'mdi-youtube',
          url: 'https://www.youtube.com/channel/UCHc0JqAKaMlTijUmTk-45HQ'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
