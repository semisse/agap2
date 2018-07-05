const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    productList: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        //To show a loading message to the user
        case 'FETCH_PRODUCTS_BEGIN':
            return {
                ...state,
                fetching: true
            };
        //Get the products
        case 'FETCH_PRODUCTS_COMPLETE':
            return {
                ...state,
                fetching: false,
                fetched: true,
                productList: action.productList
            };
        //In case something goes wrong
        case 'FETCH_PRODUCTS_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.error,
            };
        default:
            return state;
    }
}