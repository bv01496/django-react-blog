import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import Loader from "./loader"


const TopBlogs = ({truncate}) => {
  const[top_blogs,setTop_blogs] = useState([])
  useEffect( async()=>{
    await fetch('http://127.0.0.1:8000/top-blogs')
    .then((resp)=>resp.json())
    .then((data)=>{
      setTop_blogs(data)
    })
  },[])
  
  return (
    <>
    <div className="article-section container" style={{height:`${top_blogs.length * 100}px`}}>
      <section  className="article-list2" style={{display: "grid", gridTemplateColumns: "auto auto",gridGap: "30px",marginTop: "30px"}}>
      {top_blogs.length != 0 ? top_blogs.map((article)=>(
        <Link key={article.id} to={`/blogs/${article.id}`}  style={{ textDecoration: 'none' }}>
        <div className="author-card" key={article.id}>
          <img className="card-img2" src={"http://127.0.0.1:8000"+article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,35)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,150)}</p>
          </div>
          <box-icon size="lg" name='bookmark' color="gray" style={{width:"10%"}}></box-icon>
        </div>
        </Link>
      )):<Loader/>}
      </section>
    </div>
    </>
  )
}

export default TopBlogs
