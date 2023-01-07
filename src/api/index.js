// https://materialesbasualdo.com.ar/api/catalog/product/039033cd-f096-48ab-9950-0a33a1d2e441
const BASE_URL = 'https://materialesbasualdo.com.ar/api'

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/catalog/product/${id}`)
  const responseData = await response.json()
  const product = responseData.data.product
  return {
    ...responseData,
    attributes: getProductAttributes(product),
    description: getProductDescription(product)
  }
}

function getProductAttributes(product) {
  return product.attrs.map(atr => ({id: atr.id, name: atr.attrKey.k, value: atr.v}))
}

function getProductDescription(product) {
  return product.info.templateData.description
}
