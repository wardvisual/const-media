import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_ACCOUNT_REQUEST,
  USER_UPDATE_ACCOUNT_SUCCESS,
  USER_UPDATE_ACCOUNT_FAIL,
  USER_UPDATE_ACCOUNT_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_BY_ADMIN_REQUEST,
  USER_UPDATE_BY_ADMIN_SUCCESS,
  USER_UPDATE_BY_ADMIN_RESET,
  USER_UPDATE_BY_ADMIN_FAIL,
} from "../constants/user";

export const getUserDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const updateUserAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_ACCOUNT_REQUEST:
      return { loading: true };
    case USER_UPDATE_ACCOUNT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_UPDATE_ACCOUNT_FAIL:
      return { loading: false, error: action.payload };
    case USER_UPDATE_ACCOUNT_RESET:
      return {};
    default:
      return state;
  }
};

export const listUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      const { users, pages, page } = action.payload;

      return {
        loading: false,
        users,
        pages,
        page,
      };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true };
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateUserAccountByAdminReducer = (
  state = { user: {} },
  action
) => {
  switch (action.type) {
    case USER_UPDATE_BY_ADMIN_REQUEST:
      return { loading: true };
    case USER_UPDATE_BY_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case USER_UPDATE_BY_ADMIN_RESET:
      return { loading: false, error: action.payload };
    case USER_UPDATE_BY_ADMIN_FAIL:
      return { user: {} };
    default:
      return state;
  }
};
