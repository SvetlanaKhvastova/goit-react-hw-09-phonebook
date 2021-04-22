const getIsAuthenticated = (state) => {
  // console.log(state);
  return state.auth.isAuthenticated;
};

const getUserName = (state) => state.auth.user.name;

export { getIsAuthenticated, getUserName };
