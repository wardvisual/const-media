import { normalAxiosInstance } from "../services/httpService";
import { deleteLocalStorage } from "../utils/helpers/localStorage";
import { deleteCookie, setCookie } from "../utils/helpers/cookies";
import { setAuthentication } from "../utils/helpers/auth";
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
import reloadPage from "../utils/reload";

export const googleAuth = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_GOOGLE_REQUEST });

    const { data } = await normalAxiosInstance.get("/auth/google");

    dispatch({
      type: AUTH_GOOGLE_SUCCESS,
      payload: data,
    });

    const { user, accessToken } = data;

    setAuthentication(user, accessToken);
    console.log("data", data);
  } catch (error) {
    console.log("error", error);

    dispatch({
      type: AUTH_GOOGLE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const signIn = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_SIGN_IN_REQUEST });

    const { data } = await normalAxiosInstance.post("/auth/authenticate", {
      username,
      password,
    });

    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: data,
    });

    const { user, accessToken } = data;

    setAuthentication(user, accessToken);
  } catch (error) {
    dispatch({
      type: AUTH_SIGN_IN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const signUp =
  (firstName, lastName, username, email, password, confirmPassword) =>
  async (dispatch) => {
    try {
      dispatch({ type: AUTH_SIGN_UP_REQUEST });

      const { data } = await normalAxiosInstance.post("/auth/register", {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
      });

      dispatch({
        type: AUTH_SIGN_UP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_SIGN_UP_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

export const verifyAccount = (match) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_VERIFY_ACCOUNT_REQUEST });

    const { data } = await normalAxiosInstance.get(
      `/auth/verify-account/${match.params.verificationCode}`
    );

    dispatch({ type: AUTH_VERIFY_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_VERIFY_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const accountCheckpoint = (userInfo) => async (dispatch) => {
  try {
    const { data } = await normalAxiosInstance.get(`/auth/checkpoint`);

    document.location.href = `/auth/checkpoint/${userInfo._id}`;

    console.log("ACCOUNT CHECKOUT RESPONSE >> ", data);
  } catch (error) {
    console.log("checkpoint >> ", error.response);
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_FORGOT_PASSWORD_REQUEST });

    const { data } = await normalAxiosInstance.post("/auth/forgot-password", {
      email,
    });

    dispatch({ type: AUTH_FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const resetPassword = (match, password) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_RESET_PASSWORD_REQUEST });

    const { data } = await normalAxiosInstance.put(
      `/auth/reset-password/${match.params.resetToken}`,
      { password }
    );

    dispatch({ type: AUTH_RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const refreshAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await normalAxiosInstance.post(
        `/auth/refresh-access-token`
      );
      const { accessToken } = data;

      setCookie("accessToken", accessToken);

      resolve(accessToken);
    } catch (error) {
      resolve(false);
    }
  });
};

export const revokeToken = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REVOKE_TOKEN_REQUEST });

    const { data } = await normalAxiosInstance.post("/auth/revoke-token");

    dispatch({ type: AUTH_REVOKE_TOKEN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: AUTH_REVOKE_TOKEN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

export const logoutUser = async () => {
  const { data } = await normalAxiosInstance.post("/auth/logout");
  deleteLocalStorage("userInfo");
  deleteCookie("accessToken");
  deleteLocalStorage("userAddresss");

  console.log(data);
};
