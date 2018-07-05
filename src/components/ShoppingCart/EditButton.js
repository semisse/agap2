import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { editProduct } from "../../actions/shoppingCart";
import { Button } from 'reactstrap';

class EditButton extends Component {

  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
  }

  render() {
    return (
        <div>
            {this.props.order.quantity} <Button color="secondary" onClick={this.toggle.bind(this)}>Edit</Button>
            {!this.state.shown &&
            <div>
                <input type="number" ref={(editQuantityInput) => { this.editQuantityInput = editQuantityInput }} defaultValue={this.props.order.quantity} />
                <Button color="success" type="submit" onClick={ () => {
                  this.props.actions.editQuantity({quantity: parseFloat(this.editQuantityInput.value), id: this.props.order.id});
                  this.setState({
                    shown: !this.state.shown
                  })
                } }>Save</Button>
            </div>
            }
        </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      actions: {
        editQuantity: bindActionCreators(editProduct, dispatch)
      }
    };
};

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps, mapDispatchToProps)(EditButton);

