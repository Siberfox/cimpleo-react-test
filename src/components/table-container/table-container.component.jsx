import React from "react";

import Navbar from "../navbar/navbar.component";
import Sheets from "../sheets/sheets.component";

import "./table-container.styles.scss";

const TableContainer = () => {
  return (
    <div className="table__wrapper">
      <Navbar />
      <Sheets />
    </div>
  );
};

export default TableContainer;
