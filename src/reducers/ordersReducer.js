const orderReducerDefaultState = [];

export default (state = orderReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            //Prevent to add products that are already in the shopping cart
            let index = state.findIndex(el => el.id === action.product.id);
            if(index === -1) {
                return [...state, action.product];
            }
            return state;

        case 'REMOVE_PRODUCT':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_PRODUCT':
            return state.map((order) => {
                if (order.id === action.id) {
                    return Object.assign({}, order, {
                        quantity: action.quantity
                      })
                } else {
                    return order;
                }
            });

        default:
            return state;
    }
};

