import { ADD_TO_CART } from "../constant";

export default function addToCart(data) {
  console.warn("action.js action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
}
