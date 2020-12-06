import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import * as classes from "./Home.module.css";
import * as actions from "../../store/actions/actions";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import InviteAndEarn from "../InviteAndEarn/InviteAndEarn";
import Controls from "../Controls/Controls";
import ProductGrid from "../ProductsGrid/ProductGrid";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const [sidebar, setSidebar] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(0);
  const [currentSort, setCurrentSort] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(actions.getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      const filteredProductList = filterProducts(products, currentFilter);
      const sortedProductList = sortProducts(filteredProductList, currentSort);
      setFilteredProducts(sortedProductList);
    }
  }, [currentFilter, currentSort, products]);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const changeCurrentFilter = (num) => {
    setCurrentFilter(num);
  };

  const changeCurrentSort = (num) => {
    setCurrentSort(num);
  };

  const filters = [
    "All Products",
    "Tee Shirt",
    "Denim",
    "Sweatshirt",
    "Polo Tee Shirt",
    "Shirt",
  ];

  return (
    <React.Fragment>
      {sidebar ? <Sidebar toggle={toggleSidebar} /> : null}
      <Navbar toggle={toggleSidebar} />
      <div className={classes.navPlaceholder} />
      <InviteAndEarn />
      {products ? (
        <div className={classes.main}>
          <Controls
            filters={filters}
            currFilter={currentFilter}
            products={filteredProducts}
            changeFilter={changeCurrentFilter}
            changeSort={changeCurrentSort}
          />
          <ProductGrid products={filteredProducts} />
        </div>
      ) : (
        <div className={classes.loaderDiv}>
          <Loader type="Bars" color=" #e64c09" height={80} width={80} />
        </div>
      )}
    </React.Fragment>
  );
};

const filterProducts = (products, filterNo) => {
  const filter = (tag) => {
    return products.filter((product) => {
      if (tag) {
        return product.tag === tag;
      } else {
        return true;
      }
    });
  };

  switch (filterNo) {
    case 0: {
      return filter();
    }
    case 1: {
      return filter("T-shirt");
    }
    case 2: {
      return filter("Denim");
    }
    case 3: {
      return filter("Sweatshirt");
    }
    case 4: {
      return filter("Polo T-shirt");
    }
    case 5: {
      return filter("shirt");
    }
    default:
      return products;
  }
};

const sortProducts = (products, sort) => {
  switch (sort) {
    case 0: {
      return products;
    }
    case 1: {
      const sorted = ascSort(products);
      return sorted;
    }
    case 2: {
      const sorted = descSort(products);
      return sorted;
    }
    default:
      return products;
  }
};

const ascSort = (inputArr) => {
  let arr = inputArr;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (parseInt(arr[j].price) < parseInt(arr[min].price)) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

const descSort = (inputArr) => {
  const arr = inputArr;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let max = i;
    for (let j = i + 1; j < n; j++) {
      if (parseInt(arr[j].price) > parseInt(arr[max].price)) {
        max = j;
      }
    }
    if (max !== i) {
      // Swapping the elements
      let tmp = arr[i];
      arr[i] = arr[max];
      arr[max] = tmp;
    }
  }
  return arr;
};

export default Home;
