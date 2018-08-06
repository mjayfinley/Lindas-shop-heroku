import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Payment from './Payment'
import * as actionCreators from '../store/actionCreators'

class Cart extends Component {

  constructor(props) {
    super(props)

    this.props.populateCart()


  }

  render() {

    let cartList = this.props.cart.map((product, index) => {
      return (
        <div className='table-responsive'>
          <table className='table table-striped table-bordered'>
            <thead className='thead-dark'>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
            <tr key={index}>

              <td className='table-second-column'>{product.product_name}</td>
              <td className='table-third-column'>${product.price}</td>
              <td className='table-fourth-column' ><button onClick={() =>  {this.props.onDeleteItem(product); this.props.deleteFrontEnd(product)}}>Delete Item</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      )
    })
    return(
      <div>
        <h1>Your Cart</h1>
        <div className='row'>

          <div className='col-md-9'>
            {cartList}
            <div>Total Items: {this.props.cartCount}</div>

            <div>Cart Total: ${this.props.total}</div>
          </div>




          <div className='col-md-3'>
            <Payment />

            <Link to = '/' className='btn btn-info'>Continue Shopping</Link>

          </div>
        </div>

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

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItem : (product) => dispatch(actionCreators.deleteItem(product)),

    deleteFrontEnd : (product) => dispatch(actionCreators.deleteItemFrontEnd(product)),

    populateCart : () => dispatch(actionCreators.populateCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
