import React, {Component} from 'react'

import BasketWidget from './BasketWidget'
import Categories from './Categories'

class Sidebar extends Component {

  render() {
    return (
      <div className='sidebar-position sidenav'>
        <BasketWidget />
        <Categories />
      </div>
    )
  }
}


export default Sidebar
