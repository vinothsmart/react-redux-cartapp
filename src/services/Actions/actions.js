import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

export function addToCart(data) {
  console.warn("action.js action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
}

export function removeFromCart(data) {
  console.warn("action.js action", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
}
