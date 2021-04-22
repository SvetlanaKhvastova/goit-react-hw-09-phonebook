import axios from "axios";
import * as authActions from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.signupUserRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(authActions.signupUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.signupUserError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginUserRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(authActions.loginUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginUserError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutUserRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(authActions.logoutUserSuccess());
  } catch (error) {
    dispatch(authActions.logoutUserError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: getIsAuthenticated },
  } = getState();

  if (!getIsAuthenticated) {
    return;
  }

  token.set(getIsAuthenticated);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export { register, logIn, logOut, getCurrentUser };
