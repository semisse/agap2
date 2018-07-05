import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeProduct } from '../../actions/shoppingCart';
import EditButton from './EditButton'
import { Container, Row, Table, Button } from 'reactstrap';
import Total from './Total'

class ShoppingCart extends Component {
    render() {
        let orders = this.props.orders;
        if (orders.length === 0) {
            return (
                <Container>
                    <h1>No products</h1>
                </Container>
            )
        } else {
            return (
                <Container>
                    <Row>
                        <h1>ORDERS</h1>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders && orders.map((order, i) =>
                                    <tr key={i}>
                                        <td>{order.description}</td>
                                        <td>{order.price}</td>
                                        <td><EditButton order={order} /></td>
                                        <td><Button color="danger" onClick={ () => this.props.actions.onRemoveProduct({ id: order.id }) }>Remove</Button></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Row>
                    <Total orders={orders} />
                    <Button color="success" className="float-right" onClick={ () => console.log("Checkout Complete!", orders)}>Checkout</Button>
                </Container>
            )
        }
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      onRemoveProduct: bindActionCreators(removeProduct, dispatch)
    }
  };
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);