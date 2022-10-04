export const getBasketTotal = (basket) => {
  let subTotal = 0;
  for (const item of basket) {
    subTotal = subTotal + item.price;
  }
  return subTotal;
};

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.payload];
    case "REMOVE_FROM_BASKET":
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    case "EMPTY_BASKET":
      return [];
    default:
      return state;
  }
};

export default basketReducer;
