import { logoutUser } from "../../actions/auth";
import { getCookie, setCookie } from "./cookies";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import avatarPlaceholder from "../../assets/images/avatar-placeholder.svg";

export const setAuthentication = async (user, token) => {
  user.avatar = avatarPlaceholder;
  setCookie("accessToken", token);
  setLocalStorage("userInfo", user);
};

export const isAuthenticated = () => {
  if (!getCookie("accessToken") && !getLocalStorage("userInfo")) {
    return false;
  }

  if (!getCookie("accessToken") || !getLocalStorage("userInfo")) {
    logoutUser();
  }

  return getLocalStorage("userInfo");
};
