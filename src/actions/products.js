//Action to get the products

export const fetchProductsBegin = () => ({
    type: 'FETCH_PRODUCTS_BEGIN'
});

export const fetchProductsComplete = (productList) => ({
    type: 'FETCH_PRODUCTS_COMPLETE',
    productList
});

export const fetchProductsError = error => ({
    type: 'FETCH_PRODUCTS_ERROR',
    error
});

export function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchProductsBegin(true));
        fetch('http://localhost:3000/data/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((productList) => dispatch(fetchProductsComplete(productList)))
            .catch(() => dispatch(fetchProductsError(true)));
    };
}
