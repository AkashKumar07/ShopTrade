import React from "react";

import * as classes from "./Controls.module.css";
import SelectComponent from "./SelectComponent/SelectComponent";

const Controls = (props) => {
  const { filters, currFilter, products, changeFilter, changeSort } = props;
  return (
    <div className={classes.controls}>
      <p>
        Home / Clothing / Mens Clothing / <span>All Mens Clothing</span>
      </p>
      <div className={classes.currentFilter}>
        <p>
          {filters[currFilter]} <span>({products.length} Products)</span>
        </p>
      </div>
      <div className={classes.options}>
        <div className={classes.filters}>
          <p>Filters:</p>
          {filters.map((filter, index) => (
            <div
              key={index}
              className={
                currFilter === index
                  ? classes.filterOptionActive
                  : classes.filterOption
              }
              onClick={() => changeFilter(index)}
            >
              {filter}
            </div>
          ))}
        </div>
        <div className={classes.sort}>
          <SelectComponent changeSort={changeSort} />
        </div>
      </div>
    </div>
  );
};

export default Controls;
