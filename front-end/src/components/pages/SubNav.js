import React from 'react'
import {Link} from "react-router-dom"
import {useState,useEffect} from 'react'

const SubNav = () => {
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
      <nav className="sub-nav container" style={{boxShadow:style.boxShadow}}>
      <span className="sub-logo" style={{visibility:style.visibility,opacity: style.opacity}} id="logo">SPECTA-DOR</span>
      <span>TOP-BLOGS</span>
      <span>MY READS</span>
      <span>TOP-NEWS</span>
      <Link to="/top-blogs" style={{textDecoration: "none",color:"white"}}><span>TOP-BLOGS</span></Link>
      <div className="social-media">
        <a href="www.facebook.com"><box-icon color="white" size="md" type='logo' name='facebook-circle'></box-icon></a>
        <a><box-icon color="white" size="md" name='twitter' type='logo' ></box-icon></a>
        <a><box-icon color="white" size="md" name='whatsapp' type='logo' ></box-icon></a>
      </div>
    </nav>
    </>
  )
}

export default SubNav
