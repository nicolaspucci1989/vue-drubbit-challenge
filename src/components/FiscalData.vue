<template>
  <div class="d-flex justify-center align-center justify-md-start mb-6">
    <div>
      <a :href="url" target="_blank">
        <v-img :src="img" width="70"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiscalData",
  data() {
    return {
      img: 'https://www.afip.gob.ar/images/f960/DATAWEB.jpg',
      url: 'http://qr.afip.gob.ar/?qr=yVrCGTlYOG0GujGAS-FWKA,,'
    }
  }
}
</script>

<style scoped>

</style>
