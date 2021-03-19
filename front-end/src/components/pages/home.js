import React from 'react'
import 'boxicons'
import Articles from "./Articles"
import By_author from "./by_author"
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const Home = () => {


  return (
    <>
    <nav className="navbar container">
      <h2 id="logo" >SPECTA-DOR</h2>
      <div className="search-box">
      <box-icon color="white" className="search-icon" size="lg" name='search-alt' ></box-icon>
      <span className="search-group">
      <input id="search"/>
      <button className="search-button"><box-icon color="white" size="lg" name='search-alt' ></box-icon></button>
      </span>
      </div>
      <div className="social-media">
        <a href="www.facebook.com"><box-icon color="white" size="lg" type='logo' name='facebook-circle'></box-icon></a>
        <a><box-icon color="white" size="lg" name='twitter' type='logo' ></box-icon></a>
        <a><box-icon color="white" size="lg" name='whatsapp' type='logo' ></box-icon></a>
      </div>
    </nav>
    <section className="hero container">
      <center>
      <h1 className="greet">hi welcome back to<br/> SPECTA-DOR</h1><br/>
      <p>---- in here you will get latest news of every genere you would ever think of ----</p>
      </center>
      
    </section>
    <div className="articles">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Articles}/>
      </Switch>
      <Switch>
        <Route path={`/by/:author`} exact component={By_author}/>
      </Switch>

      </BrowserRouter>
    </div>
    </>
  )
}

export default Home
