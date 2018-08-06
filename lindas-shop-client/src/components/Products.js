import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'

import Sidebar from './Sidebar'



class Products extends Component {
  constructor(props) {
    super(props)
    this.props.onPopulateProducts()


  }




  render() {

    let productList = this.props.products.map((product) => {
      return (
        <div className='card' key={product.id}>
            <img className='card-img-top' src={product.image1} alt="1" />
            <div className='card-body'>
              <h4 className='card-title' >{product.product_name}</h4>
              <h5 className='card-title'>${product.price}</h5>
              <button type='button' className='btn btn-lg btn-outline-secondary' onClick={() => {this.props.showProductDetails(product)}}><Link to = {`/itemdetails/${product.id}`} className='details-link'>Details</Link></button>
              <button className='btn btn-lg btn-primary' onClick={() => {this.props.addToCart(product); this.props.addToCartFrontEnd(product)}}>Quick Buy</button>
            </div>
        </div>
      )
    })


    return(
      <div className='row'>

        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <div className='card-columns'>
          {productList}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products,
    cart : state.cartReducer.cart,
    cartTotal : Math.round(state.cartReducer.total * 100) / 100
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product)),

    addToCart : (product) => dispatch(actionCreators.addToCart(product)),

    addToCartFrontEnd : (product) => dispatch(actionCreators.addToCartFrontEnd(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
