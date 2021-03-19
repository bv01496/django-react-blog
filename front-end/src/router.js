import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Articles from './components/pages/Articles'
import Home from "./components/pages/home"
const Router_component = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router_component
