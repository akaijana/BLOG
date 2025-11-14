import React, { useEffect, useState } from 'react'
import './editBlog.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState({})

  const editBlog = async (e)=>{
    e.preventDefault()
   const response = await axios.put(`https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs/${id}`,blog)
   if(response.status == 200){
    navigate(`/singleblogs/${id}`)
   }
  }

  const fetchBlog = async () => {
    const response = await axios.get(`https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs/${id}`)
    if (response.status == 200) {
      setBlog(response.data)
      
    }
  }

  useEffect(()=>{
    fetchBlog()
  },[])


  return (
    <div className="form-container">
    <form onSubmit={editBlog}>
      <h1>Submit Your Details</h1>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={blog.title} onChange={(e)=>setBlog({...blog,title:e.target.value})}  name="title" required  />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={blog.description} onChange={(e)=>setBlog({...blog,description:e.target.value})} rows="4" required ></textarea>

      <label htmlFor="image">Upload Image:</label>
      <input type="text" id="image" value={blog.avatar} onChange={(e)=>setBlog({...blog,avatar:e.target.value})}  name="avatar" required />
      {/* <label htmlFor="title">Title:</label>
      <input type="text" id="title"  name="title" required onChange={(e)=>setTitle(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" rows="4" required onChange={(e)=>setDescription(e.target.value)}></textarea>

      <label htmlFor="image">Upload Image:</label>
      <input type="text" id="title"  name="title" required onChange={(e)=>setImage(e.target.value)}/> */}

      <button type="submit" value='Submit'>Edit</button>
    </form>
  </div>
  )
}

export default EditBlog