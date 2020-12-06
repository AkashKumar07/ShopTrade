import React, { useState, useEffect, useRef } from "react";

import * as classes from "./SelectComponent.module.css";

const SelectComponent = (props) => {
  const { changeSort } = props;
  const [sortby, setSortBy] = useState("None");
  const [showList, setShowList] = useState(false);

  //detect click outside the component
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowList(false);
  };

  //================================================================================================

  const toggle = () => {
    setShowList(!showList);
  };

  const changeSortby = (value, index) => {
    setSortBy(value);
    setShowList(false);
    changeSort(index);
  };

  return (
    <div className={classes.main} ref={node}>
      <div className={classes.selectDiv} onClick={toggle}>
        <p>
          Sort By: <span>{sortby}</span>{" "}
          <i
            className={
              showList
                ? ["fas fa-angle-down", classes.rotate].join(" ")
                : "fas fa-angle-down"
            }
          ></i>
        </p>
      </div>
      {showList ? (
        <ul className={classes.selectOptions}>
          <li onClick={() => changeSortby("None", 0)}>None</li>
          <li onClick={() => changeSortby("Price Low To High", 1)}>
            Price Low To High
          </li>
          <li onClick={() => changeSortby("Price High To Low", 2)}>
            Price High To Low
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default SelectComponent;
