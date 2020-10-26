import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import tableReducer from "./table/table.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  table: tableReducer,
});

export default rootReducer;
