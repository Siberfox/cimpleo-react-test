import tableActionTypes from "./table.types";

export const deleteData = (id) => ({
  type: tableActionTypes.DELETE_DATA,
  payload: id,
});

export const editStart = (id) => ({
  type: tableActionTypes.EDIT_START,
  payload: id,
});

export const editData = (...data) => ({
  type: tableActionTypes.EDIT_DATA,
  payload: data,
});
