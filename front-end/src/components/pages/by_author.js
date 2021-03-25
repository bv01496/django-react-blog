import React from 'react'
import {useState,useEffect} from 'react'
import {useHistory, useParams,Link} from 'react-router-dom'

const By_author = () => {
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
  const truncate=(str,num)=>{
    return (str.length > num ? (str.slice(0,num)+"...") : str) 
  }
  return (
    <>
    <div className="article-section container">
      <h1 className="author-name" >Articles by - {author}</h1>
      <section  className="article-list2" style={{display: "grid", gridTemplateColumns: "auto auto",gridGap: "30px"}}>
      {articles.map((article)=>(
        <Link key={article.id} to={`/blogs/${article.id}`}  style={{ textDecoration: 'none' }}>
        <div className="author-card" key={article.id}>
          <img className="card-img2" src={"http://127.0.0.1:8000"+article.image} alt=""/>
          <div className="card-content">
          <p className="title">{truncate(article.title,35)}</p><br/>
          <p className="content-tumbnile">{truncate(article.content,150)}</p>
          </div>
        </div>
        </Link>
      ))}
      </section>
    </div>
    </>
  )
}

export default By_author
