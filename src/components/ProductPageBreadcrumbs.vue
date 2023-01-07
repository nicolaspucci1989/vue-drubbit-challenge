<template>
  <div>
    <v-breadcrumbs
        :items="items"
        divider="/"
    ></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "ProductPageBreadcrumbs",
  data() {
    return {
      items: [
        {
          text: 'Tienda',
          disabled: false,
          href: 'https://materialesbasualdo.com.ar/shop',
        },
        {
          text: 'Baños',
          disabled: false,
          href: 'https://materialesbasualdo.com.ar/banos',
        },
        {
          text: 'Sanitarios',
          disabled: false,
          href: 'https://materialesbasualdo.com.ar/banos/sanitarios',
        },
        {
          text: 'Inodoros',
          disabled: false,
          href: 'https://materialesbasualdo.com.ar/banos/sanitarios/inodoros',
        },
      ],
    }
  },
}
</script>

<style lang="sass">
.v-breadcrumbs a
  color: #461e8c!important
</style>
