import UserActionTypes from "./user.types";

export const signInStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = () => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
