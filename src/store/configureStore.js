import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import ordersReducer from '../reducers/ordersReducer';
import productReducer from '../reducers/productsReducer';

export default () => {
  const middleware = applyMiddleware(ReduxThunk, logger);
  const store = createStore(
    combineReducers({
      orders: ordersReducer,
      products: productReducer
    }),
    middleware
  );

  // store.dispatch({ type: 'EDIT_PRODUCT', id: '1', quantity: 17});
  // store.dispatch((dispatch) => {
  //   dispatch({ type: 'FETCH_PRODUCTS_BEGIN'})
  //   axios.get('http://localhost:3000/data/products.json')
  //   .then((response) => {
  //       dispatch(fetchProductsComplete({ productList: response.data }))
  //   })
  //   .catch((err) => {
  //       dispatch({type: 'FETCH_PRODUCTS_ERROR', error: err})
  //   });
  // });

  return store;
};


