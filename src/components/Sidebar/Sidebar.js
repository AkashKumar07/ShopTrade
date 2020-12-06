import React from "react";

import * as classes from "./Sidebar.module.css";
import Logo from "../../assets/shopTradeLogo.png";

const Sidebar = (props) => {
  const { toggle } = props;
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={() => toggle()} />
      <div className={classes.sidebar}>
        <div className={classes.logoDiv}>
          <img src={Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.nav}>
          <ul className={classes.navList}>
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
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
