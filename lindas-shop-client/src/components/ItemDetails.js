import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Sidebar from './Sidebar'

import * as actionCreators from '../store/actionCreators'


class ItemDetails extends Component {


  render() {


    let listItem = this.props.item.map((product) => {
      return (
        <div key={product.id}>
          <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
              <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
              <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img className='d-block w-100' src={product.image1} alt={product.product_name}/>
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src={product.image2} alt={product.product_name}/>
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src={product.image3} alt={product.product_name}/>
              </div>
            </div>
            <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div >
            <h4>${product.price}</h4>
            <h4>{product.product_name}</h4>
            <p>{product.description}</p>
          </div>

        </div>
      )
    })

    return(
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-6'>
          {listItem}
        </div>
        <div className='col-md-3'>
          <button className='btn btn-success btn-block' onClick={() => {this.props.addToCart(this.props.item[0]); this.props.addToCartFrontEnd(this.props.item[0])}}>Add to Cart</button>
          <Link to = '/'className='btn btn-info btn-block'>Continue Shopping</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item : [state.productReducer.item]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (product) => dispatch(actionCreators.addToCart(product)),

    addToCartFrontEnd : (product) => dispatch(actionCreators.addToCartFrontEnd(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
