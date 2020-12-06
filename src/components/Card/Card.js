import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as classes from "./Card.module.css";
import * as actions from "../../store/actions/actions";

const Card = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const [select, setSelect] = useState(false);

  const setSelectTrue = () => {
    setSelect(true);
  };

  const setSelectFalse = () => {
    setSelect(false);
  };

  const addItemToCart = (item) => {
    dispatch(actions.addToCart(item));
    setSelectFalse();
  };

  const trimString = (text) => {
    const string = text.substring(0, 35) + "...";
    return string;
  };

  const calculateDiscount = (sp, mp) => {
    const discount = Math.ceil(((mp - sp) / mp) * 100);
    return discount;
  };

  return (
    <div key={product.id} className={classes.card}>
      <img
        src={product.image_src[0]}
        alt="productImage"
        onClick={setSelectFalse}
      />
      <div className={classes.details}>
        <div>
          <div className={classes.options}>
            <button className={classes.addToCart} onClick={setSelectTrue}>
              ADD TO CART
            </button>
            <p className={classes.type}>Sizes: XS, S, M, L, XL</p>
          </div>
          {select ? (
            <div className={classes.selectSize}>
              <p className={classes.selectSizeTitle}>Select Size</p>
              <div className={classes.sizesRow}>
                <div
                  className={classes.size}
                  onClick={() => addItemToCart(product.options[0])}
                >
                  38
                </div>
                <div
                  className={classes.size}
                  onClick={() => addItemToCart(product.options[1])}
                >
                  39
                </div>
                <div
                  className={classes.size}
                  onClick={() => addItemToCart(product.options[2])}
                >
                  40
                </div>
                <div
                  className={classes.size}
                  onClick={() => addItemToCart(product.options[3])}
                >
                  44
                </div>
                <div
                  className={classes.size}
                  onClick={() => addItemToCart(product.options[4])}
                >
                  46
                </div>
              </div>
              <p className={classes.type}>Sizes: XS, S, M, L, XL, XXL</p>
            </div>
          ) : null}
          <p className={classes.brand}>{product.vendor}</p>
          <p className={classes.type}>
            {product.name.length <= 35
              ? product.name
              : trimString(product.name)}
          </p>
        </div>
        <p className={classes.price}>
          ${product.price}{" "}
          <span className={classes.markedprice}>
            ${product.compare_at_price}
          </span>
          <span className={classes.discount}>
            {" "}
            (
            {calculateDiscount(
              parseInt(product.price),
              parseInt(product.compare_at_price)
            )}
            % OFF)
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
