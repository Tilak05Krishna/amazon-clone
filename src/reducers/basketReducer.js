
export const getBasketTotal = (basket) => {
    console.log(`Basket: \n `);
    console.log(basket);
    let subTotal = 0;
    for(const item of basket) {
        subTotal = subTotal + item.price;
    }
    return subTotal;
}

const basketReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            console.log('Action payload: \n');
            console.log(action.payload);
            return [...state, action.payload];
        case 'REMOVE_FROM_BASKET':
            console.log('action: \n');
            console.log(action);
            //Filter Method
            const newState = state.filter(item => item.id !== action.payload.id);
            return newState;
        default: 
            return state;
    }
}

export default basketReducer;