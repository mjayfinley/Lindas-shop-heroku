import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'


class Categories extends Component {


  render() {


    let categories = []
    this.props.products.map((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category)
      }
      return categories
    })

    let categoryList = categories.map((category, index) => {
      return (
        <button key={index} className='list-group-item list-group-item-action' onClick={() => this.props.filterForCategory(category, this.props.products)}><Link to={`/${category}`}>{category}</Link>
        </button>

      )
    })


    return(
        <div className='list-group center-list-items'>
          <button className='list-group-item list-group-item-action' onClick={() => this.props.onPopulateProducts()}><Link to='/'>All</Link></button>
          {categoryList}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterForCategory : (category, products) => dispatch(actionCreators.filterForCategory(category, products)),

    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
