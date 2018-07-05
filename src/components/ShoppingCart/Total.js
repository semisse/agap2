import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
  render() {
    let total = this.props.orders.reduce((acc, val) => acc + parseFloat(val.price) * parseFloat(val.quantity) , 0);
    return (
        <h3>Total: {total.toFixed(2)}€</h3>
    )
  }
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Total);