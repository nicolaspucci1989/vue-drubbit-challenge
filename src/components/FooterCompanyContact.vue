<template>
  <div class="mb-6">
    <v-img
        src="https://d3owgox48n6bqy.cloudfront.net/basualdo/uploads/fcfc5e2b51aa92dc6a39c93084a97153ea98dd51.png"
        class="mb-2"
        width="300"
    />
    <v-col class="text--white text-center">
      <div class="mb-2" v-for="(link, index) in links" :key="index">
        <v-icon color="white">{{ link.icon }}</v-icon>
        <a :href="link.url" target="_blank">{{ link.text }}</a>
      </div>
    </v-col>
    <FooterSocials/>
  </div>
</template>

<script>
import FooterSocials from "@/components/FooterSocials";
export default {
  name: "FooterCompanyContact",
  components: {FooterSocials},
  data() {
    return {
      links: [
        {
          icon: 'mdi-map-marker',
          text: 'Rico 640, Dolores, Prov de Buenos Aires',
          url: 'https://www.google.com/maps/place/MATERIALES+BASUALDO+S.A./@-36.321064,-57.6761036,17z/data=!3m1!4b1!4m5!3m4!1s0x95999e690e8fae7f:0x78429fd1143a2264!8m2!3d-36.3210683!4d-57.6739149'
        },
        {
          icon: 'mdi-phone',
          text: '+5402245440664',
          url: 'tel:+5402245440664'
        },
        {
          icon: 'mdi-whatsapp',
          text: '+5492245600000',
          url: 'https://wa.link/6itjn1'
        },
        {
          icon: 'mdi-email',
          text: 'ventas@materialesbasualdo.com.ar',
          url: 'mailto:ventas@materialesbasualdo.com.ar'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>