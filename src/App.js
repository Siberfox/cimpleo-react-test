import React from "react";
import { connect } from "react-redux";

import AuthForm from "./components/auth-form/auth-form.component";
import TableContainer from "./components/table-container/table-container.component";

import "./App.scss";

function App({ currentUser }) {
  return (
    <div className="App">{currentUser ? <TableContainer /> : <AuthForm />}</div>
  );
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(App);
