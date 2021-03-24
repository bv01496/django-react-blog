import React from 'react'
import 'boxicons'
import Articles from "./Articles"
import By_author from "./by_author"
import {Link,Route, Switch,HashRouter} from 'react-router-dom'
import Detail from "./detail"

const Home = () => {


  return (
    <>
    <nav className="navbar container">
      <Link exact to="#/" style={{ textDecoration: 'none' }}><h2 id="logo" >SPECTA-DOR</h2></Link>
      
      <div className="search-box">
      <box-icon color="white" className="search-icon" size="md" name='search-alt' ></box-icon>
      <span className="search-group">
      <input id="search"/>
      <button className="search-button"><box-icon color="white" size="md" name='search-alt' ></box-icon></button>
      </span>
      </div>
      <div className="social-media">
        <a href="www.facebook.com"><box-icon color="white" size="md" type='logo' name='facebook-circle'></box-icon></a>
        <a><box-icon color="white" size="md" name='twitter' type='logo' ></box-icon></a>
        <a><box-icon color="white" size="md" name='whatsapp' type='logo' ></box-icon></a>
      </div>
    </nav>
    <div className="articles container">
      <HashRouter>
      <Switch>
      <Route path="/" exact component={Articles}/>
      </Switch>
      <Switch>
        <Route path={`/by/:author`} exact component={By_author}/>
      </Switch>
      <Switch>
        <Route path={`/blogs/:id`} exact component={Detail}/>
      </Switch>
      </HashRouter>
    </div>
    </>
  )
}

export default Home
