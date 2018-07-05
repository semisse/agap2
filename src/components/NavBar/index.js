import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {
  Button,
  Badge,
  Navbar,
  NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavLink tag={Link} to="/">Store</NavLink>
          <NavLink tag={Link} to="/shopping-cart">
            <Button color="primary" outline>
              Shopping Cart <FontAwesome name='shopping-cart' /> <Badge color="success">{this.props.orders.length}</Badge>
            </Button>
          </NavLink>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NavBar);
