import {
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_FAIL,
  AUTH_SIGN_IN_FAIL,
  AUTH_SIGN_IN_REQUEST,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_UP_REQUEST,
  AUTH_SIGN_UP_SUCCESS,
  AUTH_VERIFY_ACCOUNT_REQUEST,
  AUTH_VERIFY_ACCOUNT_SUCCESS,
  AUTH_VERIFY_ACCOUNT_FAIL,
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAIL,
  AUTH_RESET_PASSWORD_FAIL,
  AUTH_RESET_PASSWORD_REQUEST,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_REVOKE_TOKEN_REQUEST,
  AUTH_REVOKE_TOKEN_SUCCESS,
  AUTH_REVOKE_TOKEN_FAIL,
  AUTH_GOOGLE_REQUEST,
  AUTH_GOOGLE_SUCCESS,
  AUTH_GOOGLE_FAIL,
} from "../constants/auth";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN_REQUEST:
      return { loading: true };
    case AUTH_SIGN_IN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case AUTH_SIGN_IN_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export const userAuthGoogleReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_GOOGLE_REQUEST:
      return { loading: true };
    case AUTH_GOOGLE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case AUTH_GOOGLE_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP_REQUEST:
      return { loading: true };
    case AUTH_SIGN_UP_SUCCESS:
      return { loading: false, payload: action.payload };
    case AUTH_SIGN_UP_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_SIGN_OUT:
      return {};
    default:
      return state;
  }
};

export const verifyAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_VERIFY_ACCOUNT_REQUEST:
      return { loading: true };
    case AUTH_VERIFY_ACCOUNT_SUCCESS:
      return { loading: false, payload: action.payload };
    case AUTH_VERIFY_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_FORGOT_PASSWORD_REQUEST:
      return { loading: true };
    case AUTH_FORGOT_PASSWORD_SUCCESS:
      return { loading: false, payload: action.payload };
    case AUTH_FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_RESET_PASSWORD_REQUEST:
      return { loading: true };
    case AUTH_RESET_PASSWORD_SUCCESS:
      return { loading: false, payload: action.payload };
    case AUTH_RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const revokeTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REVOKE_TOKEN_REQUEST:
      return { loading: true };
    case AUTH_REVOKE_TOKEN_SUCCESS:
      return { loading: false, payload: action.payload };
    case AUTH_REVOKE_TOKEN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
