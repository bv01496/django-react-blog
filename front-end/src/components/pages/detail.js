import React from 'react'
import {useState,useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import "../assets/detail.css"

const Detail = () => {
  const{id} = useParams()
  const[post,setpost]= useState([])
  const[comments,setcomments] = useState([])
  const[comment_obj,setcomment_obj] = useState({
    comment : "",
    post: id,
    user : 1
  })
  

  useEffect(async()=>{
     await fetch(`http://127.0.0.1:8000/blogs/${id}`)
    .then((resp)=> resp.json())
    .then((data)=> setpost(data))
    await fetch(`http://127.0.0.1:8000/blog-comments/${id}`)
    .then((resp)=>resp.json())
    .then((data)=> setcomments(data.map((obj)=>(
      obj.comment
    ))))
    .catch((error)=>console.log(error))
  },[])

    const input = document.getElementById("add-comment")
    const handleChange=(e)=>{
      const value = e.target.value
      setcomment_obj({...comment_obj,comment: value})
    }
    
  const handleSubmit=(e)=>{
    e.preventDefault()
    setcomments([...comments,input.value])
    fetch("http://127.0.0.1:8000/blog-comments/",{
    method:"POST",
    headers : {
      "Content-type" : "application/json"
    },
    body : JSON.stringify(comment_obj)
    } ).then(()=>{
      input.value= ""
    })
    .catch((error)=>console.log(error))
  }
  return (
    <>
    <div className="post-container container">
      <img src={post.image} alt="post image"/>
      <div className="post-title">
         <p>{post.title}</p><br/>
         <div>by <Link style={{ textDecoration: 'none' }} to={`/by/${post.author}`}>{post.author}</Link> created on <span style={{color:"rgb(68, 68, 125)"}}>{post.created}</span></div>
         <hr/><br/>
         <div className="post-header">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam omnis expedita cumque sequi id nobis ipsam dolorem, at, dolor a rem modi ut perferendis cum optio molestias sapiente saepe. Ducimus.</div>
         <div className="shares">
           <box-icon size="md" color="blue" type='logo' name='facebook-circle'></box-icon>
           <box-icon size="md" color="green" type='logo' name='whatsapp'></box-icon>
           <box-icon size="md" color="blue" type='solid' name='share'></box-icon>
         </div>
      </div>
      <div className="arti">{post.content}</div>
    </div>
    <div className="comment-section container">
      <form action="" method="post" onSubmit={handleSubmit}>
        <input onChange={handleChange} id="add-comment" type="text" placeholder="Add a public comment" name="comment"/>
        <button className="comment-submit" type="submit"> submit</button>
      </form>
      <div className="comments">
        {comments.map((comment)=>{
          return(<div>{comment}</div>)
        })}
      </div>
    </div>
    </>
  )
}

export default Detail
