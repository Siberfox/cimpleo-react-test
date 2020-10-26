import React, { useState } from "react";

import { Link } from "react-router-dom";

import Peoples from "../../assets/peoples.svg";
import Docs from "../../assets/table.svg";

import "./navbar.styles.scss";

const Navbar = () => {
  const [hide, setHide] = useState(false);

  const hideNavbar = () => {
    setHide(!hide);
  };

  return (
    <div className={"navbar__wrapper" + (hide ? " navbar__hidden" : "")}>
      <ul className="menu__list">
        <li>
          <Link to="/" className="menu__item">
            <img className="menu__item-image" src={Peoples} alt="" />
            <span className="menu__item-text">Users</span>
          </Link>
        </li>
        <li>
          <Link to="temperature" className="menu__item">
            <img className="menu__item-image" src={Docs} alt="" />
            <span className="menu__item-text">Temperature</span>
          </Link>
        </li>
      </ul>
      <div className="menu__hide-button" onClick={() => hideNavbar()}>
        ←
      </div>
    </div>
  );
};

export default Navbar;
