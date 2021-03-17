import React from 'react'
import {useState,useEffect} from 'react'

const Home = () => {
  const[articles,setArticles] = useState([])
  useEffect(()=>{
     fetch('http://127.0.0.1:8000/blogs/')
    .then((resp)=>resp.json())
    .then((data)=>{
      setArticles(data)
      console.log(data);
    })
  },[])

  return (
    <div>
      {articles.map((article)=>(
        <div class="article">
          <p>{article.title}</p>
          <p>{article.author.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
