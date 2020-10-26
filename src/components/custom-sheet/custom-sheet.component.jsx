import React, { useRef } from "react";
import { connect } from "react-redux";

import {
  deleteData,
  editStart,
  editData,
} from "../../redux/table/table.actions";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

import "./custom-sheet.styles.scss";

const CustomSheet = ({
  name,
  type,
  tableItems,
  deleteData,
  editStart,
  editData,
}) => {
  const inputEl = useRef(null);
  return (
    <TableContainer className="sheet" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="center">
                {row.edit ? (
                  <input
                    type="text"
                    className="edit-input"
                    placeholder={row[type]}
                    ref={inputEl}
                  />
                ) : (
                  row[type]
                )}
              </TableCell>
              <TableCell align="right">
                {row.edit ? (
                  <>
                    <CheckIcon
                      className="first-icon"
                      color="action"
                      onClick={() => {
                        if (inputEl.current.value) {
                          editData(row.id, inputEl.current.value, type);
                        }
                        editStart(row.id);
                      }}
                    />
                    <ClearIcon
                      className="second-icon"
                      color="action"
                      onClick={() => editStart(row.id)}
                    />
                  </>
                ) : (
                  <>
                    <CreateIcon
                      className="first-icon"
                      color="action"
                      onClick={() => {
                        if (!inputEl.current) {
                          editStart(row.id);
                        }
                      }}
                    />
                    <DeleteIcon
                      className="second-icon"
                      color="action"
                      onClick={() => deleteData(row.id)}
                    />
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = ({ table: { tableItems } }) => ({
  tableItems,
});

const mapDispatchToProps = (dispatch) => ({
  deleteData: (id) => dispatch(deleteData(id)),
  editStart: (id) => dispatch(editStart(id)),
  editData: (...data) => dispatch(editData(...data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomSheet);
