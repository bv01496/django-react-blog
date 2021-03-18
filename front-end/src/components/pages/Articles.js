import React from 'react'
import {useState,useEffect} from 'react'
import '../assets/articles.css'

const Articles = () => {
  const[articles,setArticles] = useState([])
  const[top_blogs,setTop_blogs] = useState([])
  useEffect( async()=>{
     await fetch('http://127.0.0.1:8000/blogs/')
    .then((resp)=>resp.json())
    .then((data)=>{
      setArticles(data)
      console.log(data);
    })
    await fetch('http://127.0.0.1:8000/top-blogs')
    .then((resp)=>resp.json())
    .then((data)=>{
      setTop_blogs(data)
      console.log(data);
    })
  },[])
  const truncate=(str,num)=>{
    return (str.length > num ? (str.slice(0,num)+"...") : str) 
  }
  return (
    <>
    <div className="article-section container">
      <section className="article-list">
      {articles.map((article)=>(
        <div className="card" key={article.id}>
          <img className="card-img" src={article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,35)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,150)}</p>
          </div>
        </div>
      ))}
      </section>
      <div className="top-blogs">
        <h1>TOP BLOGS</h1>
        {top_blogs.map((article)=>(
        <div className="top-card" key={article.id}>
          <img className="top-card-img" src={"http://127.0.0.1:8000"+article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,20)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,70)}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Articles
