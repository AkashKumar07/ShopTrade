import React from "react";
import { useSelector } from "react-redux";

import * as classes from "./Navbar.module.css";

const Navbar = (props) => {
  const { toggle } = props;
  const cartLength = useSelector((state) => state.cartLength);
  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <div className={classes.hamDiv} onClick={() => toggle()}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={classes.logo} />
        <div className={classes.navSet1}>
          <ul className={classes.navSet1List}>
            <li className={classes.navItem}>
              <a href="#">
                Shop <i className="fas fa-angle-down"></i>
              </a>
            </li>
            <li className={classes.navItem}>
              <a href="#">About us</a>
            </li>
            <li className={classes.navItem}>
              <a href="#">Our Stores</a>
            </li>
            <li className={classes.navItem}>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={classes.navSet2}>
          <div className={classes.iconDiv}>
            <p>search</p>
            <i className="fas fa-search"></i>
          </div>
          <div className={classes.iconDiv}>
            <i className="far fa-user"></i>
          </div>
          <div className={classes.cartDiv}>
            <i className="fas fa-shopping-cart"></i>
            {cartLength > 0 ? <p>{cartLength}</p> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
