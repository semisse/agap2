import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import ShoppingCart from '../components/ShoppingCart';
import NavBar from '../components/NavBar';

//ProductsList gives access to the list of products
//ShoppingCart gives access to the list of products in the shopping cart
export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                    <Route exact path="/" component={ProductsList} />
                    <Route exact path="/shopping-cart" component={ShoppingCart} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
