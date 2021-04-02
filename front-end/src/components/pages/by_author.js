import React from 'react'
import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import Loader from "./loader"

const By_author = ({truncate}) => {
  const{author} = useParams()
  const[articles,setArticles] = useState([])
  useEffect( async()=>{
     await fetch(`http://127.0.0.1:8000/by/${author}`)
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data);
      setArticles(data)
    })
  },[])
  return (
    <>
    <div className="article-section container" style={{height:`${articles.length * 100}px`}}>
      <h1 className="author-name" >Articles by - {author}</h1>
      <section  className="article-list2" style={{display: "grid", gridTemplateColumns: "auto auto",gridGap: "30px"}}>
      {articles.length != 0 ? articles.map((article)=>(
        <Link key={article.id} to={`/blogs/${article.id}`}  style={{ textDecoration: 'none' }}>
        <div className="author-card" key={article.id}>
          <img className="card-img2" src={"http://127.0.0.1:8000"+article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,35)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,150)}</p>
          </div>
        </div>
        </Link>
      )): <Loader/>}
      </section>
    </div>
    </>
  )
}

export default By_author
