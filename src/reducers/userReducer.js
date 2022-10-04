const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload.user;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;
