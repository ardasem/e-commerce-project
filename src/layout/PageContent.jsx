import React from 'react'
import Home from '../pages/Home'
import ProductList from '../pages/Products'
import {Switch,Route} from 'react-router-dom'

function PageContent() {
  return (
    <Switch>
      <Route exact path='/'><Home /></Route>
      <Route exact path='/shop'><ProductList /></Route>
    </Switch>
  )
}

export default PageContent