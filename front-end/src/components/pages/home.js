import React,{useState,useEffect} from 'react'
import Articles from "./Articles"
import By_author from "./by_author"
import {Link,Route, Switch,HashRouter} from 'react-router-dom'
import Detail from "./detail"

const Home = () => {
  const[style,setStyle] = useState({
    display : "none",
    visibility : "hidden",
    boxShadow : "none",
    opacity : 0
  })
  useEffect(()=>{
    document.addEventListener("scroll",()=>{
      if (window.scrollY > 70){
        setStyle({
      visibility : "visible",
      boxShadow : "5px 5px 6px black",
      opacity : 1

    })    
      } else {
        setStyle({visibility : "hidden",boxShadow : "none", opacity: 0})
      }
    })
  },[])

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
        <a><box-icon color="white" size="md" name='user-circle'></box-icon></a>
      </div>
      
    </nav>
    <nav className="sub-nav container" style={{boxShadow:style.boxShadow}}>
      <span className="sub-logo" style={{visibility:style.visibility,opacity: style.opacity}} id="logo">SPECTA-DOR</span>
      <span>TOP-BLOGS</span>
      <span>MY READS</span>
      <span>TOP-NEWS</span>
      <span>TOP-BLOGS</span>
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
