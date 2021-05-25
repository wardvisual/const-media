import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userSignInReducer,
  userSignUpReducer,
  verifyAccountReducer,
  forgotPasswordReducer,
  userAuthGoogleReducer,
  resetPasswordReducer,
  revokeTokenReducer,
} from "./reducers/auth";
import {
  updateUserAccountReducer,
  updateUserAccountByAdminReducer,
  getUserDetailsReducer,
  deleteUserReducer,
  listUsersReducer,
} from "./reducers/user";
import { getLocalStorage } from "./utils/helpers/localStorage";
import { isAuthenticated } from "./utils/helpers/auth";

const reducer = combineReducers({
  userSignIn: userSignInReducer,
  userSignUp: userSignUpReducer,
  userAuthGoogle: userAuthGoogleReducer,
  revokeToken: revokeTokenReducer,
  resetPassword: resetPasswordReducer,
  verifyAccount: verifyAccountReducer,
  forgotPassword: forgotPasswordReducer,

  listUsers: listUsersReducer,
  deleteUser: deleteUserReducer,
  getUserDetails: getUserDetailsReducer,
  updateUserAccount: updateUserAccountReducer,
  updateUserAccountByAdmin: updateUserAccountByAdminReducer,
});

const initialState = {
  userSignIn: { userInfo: isAuthenticated() },
  userProfile: getLocalStorage("userProfile"),
  userUpdateAccount: { userInfo: isAuthenticated() },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
