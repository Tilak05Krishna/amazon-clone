const userReducer = (state = {}, action) => {
  console.log("In user Reducer \n");
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
