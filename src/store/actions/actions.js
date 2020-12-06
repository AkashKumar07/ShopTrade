import axios from "axios";

import * as actionTypes from "./actionTypes";

export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get(
        "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json"
      )
      .then((res) => {
        const data = eval(res.data);
        dispatch({ type: actionTypes.GET_ALL_PRODUCTS, data: data });
      })
      .catch((err) => console.log(err));
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TO_CART, item: item });
  };
};
