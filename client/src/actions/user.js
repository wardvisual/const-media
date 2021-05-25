import {
  USER_UPDATE_ACCOUNT_REQUEST,
  USER_UPDATE_ACCOUNT_SUCCESS,
  USER_UPDATE_ACCOUNT_FAIL,
  USER_UPDATE_ACCOUNT_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_BY_ADMIN_REQUEST,
  USER_UPDATE_BY_ADMIN_SUCCESS,
  USER_UPDATE_BY_ADMIN_RESET,
  USER_UPDATE_BY_ADMIN_FAIL,
} from "../constants/user";

import { authAxiosInstance } from "../services/httpService";
import reloadPage from "../utils/reload";

/**
 * DESC User Controller
 * */
// Has an image to update.
export const updateUserAccount = (updatedAccount) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_ACCOUNT_REQUEST });

    const { data } = await authAxiosInstance.put(
      `/users/account`,
      updatedAccount,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({
      type: USER_UPDATE_ACCOUNT_SUCCESS,
      payload: data,
    });

    reloadPage();
  } catch (error) {
    dispatch({
      type: USER_UPDATE_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

/**
 * DESC Admin Controller
 * */
export const updateUserAccountByAdmin = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_UPDATE_BY_ADMIN_REQUEST,
    });

    const { data } = await authAxiosInstance.put(`/users/${user.id}`, {
      ...user,
    });

    dispatch({
      type: USER_UPDATE_BY_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_BY_ADMIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

/**
 * DESC Admin Controller
 * */
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { data } = await authAxiosInstance.get(`/users/${id}`);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};

/**
 * DESC Admin Controller
 * */
export const listUsers =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LIST_REQUEST,
      });

      const { data } = await authAxiosInstance.get(
        `/users?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LIST_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };

/**
 * DESC Admin Controller
 * */
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const { data } = await authAxiosInstance.delete(`/users/${id}`);

    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    });
  }
};
