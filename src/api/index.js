// https://materialesbasualdo.com.ar/api/catalog/product/039033cd-f096-48ab-9950-0a33a1d2e441
const BASE_URL = 'https://materialesbasualdo.com.ar/api'

export async function getProduct(id) {
  const response = await fetch(`${BASE_URL}/catalog/product/${id}`)
  return await response.json()
}
