<template>
  <v-footer class="footer white--text justify-center pt-16">
    <v-container>
      <v-row>
        <FooterCompanyContact/>
        <v-col cols="12" md="2">
          <FooterLinkList v-bind="links.categories"/>
        </v-col>
        <v-col cols="12" md="2">
          <FooterLinkList v-bind="links.brands"/>
        </v-col>
        <v-col cols="12" md="2">
          <FooterLinkList v-bind="links.institutional">
            <slot><FiscalData/></slot>
          </FooterLinkList>
        </v-col>
      </v-row>
      <FooterCopyright/>
    </v-container>
  </v-footer>
</template>

<script>
import FooterLinkList from "@/components/FooterLinkList";
import FiscalData from "@/components/FiscalData";
import FooterCopyright from "@/components/FooterCopyright";
import FooterCompanyContact from "@/components/FooterCompanyContact";

const categories = 'Aberturas,Baños,Cocinas,Instalaciones,Construcción En Seco,Electricidad,Pisos Y Revestimientos,Herramientas,Jardín Y Aire Libre,Materiales De Construccion,Calefacción,Griferías,Pinturas Y Revestimientos Plásticos'
const brands = 'LOURDES,SAN PIETRO PORCELANATO,OBLAK,ECOTERMO,ALBERDI,KLAUKOL,TROMEN,SCHNEIDER,CERRO NEGRO,GRIFERIA PEIRANO,FERRUM'
const institutional = '¿Como comprar?,Preguntas frecuentes,Terminos y condiciones'

export default {
  name: "TheFooter",
  components: { FooterCompanyContact, FiscalData, FooterLinkList, FooterCopyright },
  data() {
    return {
      links: {
        categories: {
          title: 'Categorias',
          items: categories.split(',')
        },
        brands: {
          title: 'Marcas',
          items: brands.split(',')
        },
        institutional: {
          title: 'Institucional',
          items: institutional.split(',')
        }
      }
    }
  }
}
</script>

<style scoped>
.footer {
  border-top: 10px solid red !important;
  background-color: #461e8c;
}
</style>
