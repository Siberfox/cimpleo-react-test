import tableActionTypes from "./table.types";

const INITIAL_STATE = {
  tableItems: [
    { id: 1, degree: 6, login: "John", edit: false },
    { id: 2, degree: 14, login: "Steven", edit: false },
    { id: 5, degree: 675, login: "Habib", edit: false },
    { id: 9, degree: 5, login: "Jasica", edit: false },
    { id: 14, degree: 102, login: "TruePro", edit: false },
  ],
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tableActionTypes.DELETE_DATA:
      return {
        ...state,
        tableItems: state.tableItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case tableActionTypes.EDIT_START:
      return {
        ...state,
        tableItems: state.tableItems.map((item) => {
          if (item.id === action.payload) {
            item.edit = !item.edit;
          }
          return item;
        }),
      };
    case tableActionTypes.EDIT_DATA:
      return {
        ...state,
        tableItems: state.tableItems.map((item) => {
          const [id, newValue, type] = action.payload;
          if (item.id === id) {
            item[type] = newValue;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
export default tableReducer;
