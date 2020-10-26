import React from "react";
import { Switch, Route } from "react-router-dom";

import CustomSheet from "../custom-sheet/custom-sheet.component";

import "./sheets.styles.scss";

const Sheets = () => {
  return (
    <div className="sheets__wrapper">
      <Switch>
        <Route exact path="/">
          <CustomSheet name={"Login"} type={"login"} />
        </Route>
        <Route path="/temperature">
          <CustomSheet name={"Degree"} type={"degree"} />
        </Route>
      </Switch>
    </div>
  );
};

export default Sheets;
