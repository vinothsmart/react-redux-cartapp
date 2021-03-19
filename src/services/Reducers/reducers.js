import { ADD_TO_CART } from "../constant";

const intialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  console.warn("reducers.js action", action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];
      break;
    default:
      return state;
  }
}
