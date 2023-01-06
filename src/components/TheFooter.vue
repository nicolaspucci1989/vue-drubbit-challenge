<template>
  <v-footer class="primary white--text justify-center">
    <v-container>
      <v-row>
        <v-col cols="12" v-for="linkData in links" :key="linkData.title">
          <FooterLinkList
              v-bind="linkData"
          />
        </v-col>
      </v-row>
      <div class="d-flex justify-center align-center">
        <div>
          <a href="http://qr.afip.gob.ar/?qr=yVrCGTlYOG0GujGAS-FWKA,," target="_blank">
            <v-img
                src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg"
                width="70"
            />
          </a>
        </div>
      </div>
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
      links: [
        {
          title: 'Categorias',
          items: categories.split(',')
        },
        {
          title: 'Marcas',
          items: brands.split(',')
        },
        {
          title: 'Institucional',
          items: institutional.split(',')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>