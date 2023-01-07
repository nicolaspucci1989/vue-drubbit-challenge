<template>
  <div class="py-4 open-sans-font">
    <ProductDeliveryInfo
        icon="mdi-package-up"
    >
      <div>
        Retiro gratis en nuestro local
        <br>
        Rico 640, Dolores, Prov de Buenos Aires
      </div>
    </ProductDeliveryInfo>
    <ProductDeliveryInfo icon="mdi-truck-fast">
      <div>
        Envío a domicilio. Consultenós el costo a su localidad.
        <br>
        <span style="font-size: .8rem">
           Realizamos envíos a Dolores y zona con nuestra propia flota de camiones. LLegamos a Castelli, Lezama, Pila, Chascomús, Gral. Guido, Maipú, Gral. Conesa, Lavalle y el Partido de la Costa. Por otros destinos consulte antes de realizar su compra.
        </span>
      </div>
    </ProductDeliveryInfo>
  </div>
</template>

<script>
import ProductDeliveryInfo from "@/components/ProductDeliveryInfo";
export default {
  name: "ProductDeliveryInfoGroup",
  components: { ProductDeliveryInfo }
}
</script>

<style scoped>

</style>
