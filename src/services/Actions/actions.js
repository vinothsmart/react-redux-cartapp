import { ADD_TO_CART } from "../constant";

function addToCart(data) {
  return {
    type: ADD_TO_CART,
    data: data,
  };
}
