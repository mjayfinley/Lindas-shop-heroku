import React, {Component} from 'react'
import Checkout from './Checkout'
import {connect} from 'react-redux'

class Payment extends Component {
  render () {
    return (
      <div>
        <Checkout name={"Linda's shop"} description={"Shop til you drop"} amount={this.props.total} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart : state.cartReducer.cart,
    total : Math.round(state.cartReducer.total * 100) /100,
    cartCount: state.cartReducer.cartCount
  }
}

export default connect(mapStateToProps, null)(Payment)
