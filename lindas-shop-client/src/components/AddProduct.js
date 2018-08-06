import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import * as actionCreators from '../store/actionCreators'


class AddProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product : {}
    }
  }


  handleTextChange = (e) => {
    this.setState({
      product : {
        ...this.state.product,
        [e.target.name] : e.target.value
      }
    })
  }



  render() {
    return(

      <div className='form-container'>
        <h1>Add Product</h1>


          <div className='form-row'>
            <div className='form-group col-md-6'>
              <label>Enter Product Name</label>
              <input className='form-control' name="product_name" onChange={this.handleTextChange} type="text"/>
            </div>
            <div className='form-group col-md-6'>
              <label>Enter Product Description</label>
              <input className='form-control' name="description" onChange={this.handleTextChange} type="text"/>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label>Enter Price for Product</label>
              <input className='form-control' name="price" onChange={this.handleTextChange} type="integer"/>
            </div>
            <div className='form-group col-md-4'>
              <label>Enter # of Items</label>
              <input className='form-control' name="quantity" onChange={this.handleTextChange} type='number'/>
            </div>
            <div className='form-group col-md-4'>
              <label>Category of Product</label>
              <input className='form-control' name="category" onChange={this.handleTextChange} type="text" />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label>Image URL One</label>
              <input className='form-control' name="image1" onChange={this.handleTextChange} type="text"/>
            </div>
            <div className='form-group col-md-4'>
              <label>Image URL Two</label>
              <input className='form-control' name="image2" onChange={this.handleTextChange} type="text"/>
            </div>
            <div className='form-group col-md-4'>
              <label>Image URL Three</label>
              <input className='form-control' name="image3" onChange={this.handleTextChange} type="text"/>
            </div>
          </div>



        <button className='btn btn-primary' onClick={() => {this.props.onSaveProduct(this.state.product)}}><Link to='/' className='btn btn-primary'>Add Product</Link></button>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveProduct : (product) => {
      dispatch(actionCreators.addProductUsingThunk(product))

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
