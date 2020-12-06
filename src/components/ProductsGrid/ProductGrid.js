import React from "react";
import { Grid } from "@material-ui/core";

import * as classes from "./ProductGrid.module.css";
import Card from "../Card/Card";

const ProductGrid = (props) => {
  const { products } = props;
  return (
    <div className={classes.productsGrid}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
            <Card product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductGrid;
