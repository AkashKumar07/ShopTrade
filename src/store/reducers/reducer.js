import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allProducts: null,
  cart: [],
  cartLength: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS: {
      const updatedState = {
        ...state,
        allProducts: action.data,
      };
      return updatedState;
    }
    case actionTypes.ADD_TO_CART: {
      const updatedState = {
        ...state,
      };
      updatedState.cart.push(action.item);
      updatedState.cartLength++;
      return updatedState;
    }
    default:
      return state;
  }
};

export default Reducer;
