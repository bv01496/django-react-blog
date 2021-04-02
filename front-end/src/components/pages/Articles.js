import React from 'react'
import 'boxicons'
import {useState,useEffect} from 'react'
import '../assets/articles.css'
import {Link} from 'react-router-dom'
import Hero from "./hero"
import Loader from "./loader"

const Articles = ({truncate}) => {
  const[bg,setbg] = useState("black")
  const[articles,setArticles] = useState([])
  const[top_blogs,setTop_blogs] = useState([])
  document.addEventListener("scroll",()=>{
    if (window.scrollY > 300 && window.scrollY < 1200){
      setbg("white")    
    }else{
      setbg("black")
    }
  })
 
  useEffect( async()=>{
     await fetch('http://127.0.0.1:8000/blogs/')
    .then((resp)=>resp.json())
    .then((data)=>{
      setArticles(data)
    })
    await fetch('http://127.0.0.1:8000/top-blogs')
    .then((resp)=>resp.json())
    .then((data)=>{
      setTop_blogs(data)
    })
  },[])
  return (
    <>
    <Hero/>
    <div className="article-section container">
      <section className="article-list">
      {(articles.length != 0 && top_blogs.length != 0) ? articles.map((article)=>(
        <Link to={`/blogs/${article.id}`} key={article.id} style={{ textDecoration: 'none' }}>
        <div className="card" >
          <img className="card-img" src={article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,35)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,150)}</p>
          </div>
          <box-icon size="lg" name='bookmark' color="gray" style={{width:"20%"}}></box-icon>
          <p className="author">-by <Link to={`/by/${article.author}`}>{article.author}</Link></p>
        </div>
        </Link>
      )) :<Loader/>}
      </section>
      <div className={`top-blogs ${bg}`}>
        <h1>TOP BLOGS</h1>
        {top_blogs.slice(0,3).map((article)=>(
        <Link to={`/blogs/${article.id}`} key={article.id} style={{ textDecoration: 'none' }}>
        <div className="top-card" key={article.id}>
          <img className="top-card-img" src={"http://127.0.0.1:8000"+article.image} alt=""/>
          <div className="card-content">
          <p className="title top-title">{truncate(article.title,20)}</p><br/>
          <p className="content-tumbnile top-content">{truncate(article.content,70)}</p>
          </div>
          <box-icon size="md" name='bookmark' color="gray" ></box-icon>
          <p className="top-author">-by <Link to={`/by/${article.author}`}>{article.author}</Link> </p>
        </div>
        </Link>
      ))}
      </div>
    </div>
    </>
  )
}

export default Articles
