import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrands = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  }
}
export const toggleStock = (brandName) => {
  return {
    type: TOGGLE_STOCK,
  }
}