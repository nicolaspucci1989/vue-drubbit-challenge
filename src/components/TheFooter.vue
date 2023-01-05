<template>
    <v-footer class="primary white--text justify-center">
      <v-container>
        <v-row>
          <v-col cols="12">
            <FooterLinkList
              :items="categories"
            />
          </v-col>
          <v-col cols="12">
            <FooterLinkList
              :items="brands"
            />
          </v-col>
          <v-col cols="12">
            <FooterLinkList
              :items="institutional"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>

<script>
import FooterLinkList from "@/components/FooterLinkList";

const categories = 'Aberturas,Baños,Cocinas,Instalaciones,Construcción En Seco,Electricidad,Pisos Y Revestimientos,Herramientas,Jardín Y Aire Libre,Materiales De Construccion,Calefacción,Griferías,Pinturas Y Revestimientos Plásticos'
const brands = 'LOURDES,SAN PIETRO PORCELANATO,OBLAK,ECOTERMO,ALBERDI,KLAUKOL,TROMEN,SCHNEIDER,CERRO NEGRO,GRIFERIA PEIRANO,FERRUM'
const institutional = '¿Como comprar?,Preguntas frecuentes,Terminos y condiciones'

export default {
  name: "TheFooter",
  components: {FooterLinkList},
  data() {
    return {
      categories: categories.split(','),
      brands: brands.split(','),
      institutional: institutional.split(',')
    }
  }
}
</script>

<style scoped>

</style>