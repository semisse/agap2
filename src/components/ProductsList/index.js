import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchProducts } from '../../actions/products';
import { addProduct } from '../../actions/shoppingCart';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class ProductsList extends Component {
  //Fetch products on CDM - this is a little bit controversial, I also gave another alternative commented in /store/configureStore.js
  componentDidMount() {
    this.props.actions.fetchData();
  }

  render( props ) {
    if( this.props.products.fetching === true ) {
      return (
        <h1>loading</h1>
      );
    } else {
      return (
        <Container>
          <Row>
              {
                //connect to the redux store and list each product
                this.props.products.productList.map((product, i) =>
                <Col md="4" key={i}>
                    <Card>
                      <CardImg top width="100%" src={product.pic} alt={product.description} />
                      <CardBody>
                          <CardTitle>{product.description}</CardTitle>
                          <CardText>Price: {product.price} €</CardText>
                          {/* on click dispatch product to the orders store */}
                          <Button type="submit" onClick={ () => this.props.actions.onAddProduct(product) }>
                              Buy
                          </Button>
                      </CardBody>
                    </Card>
                  </Col>
                )
              }
          </Row>
        </Container>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      fetchData: bindActionCreators(fetchProducts, dispatch),
      onAddProduct: bindActionCreators(addProduct, dispatch)
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);