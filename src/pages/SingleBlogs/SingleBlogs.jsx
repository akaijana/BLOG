import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singleblog.css'

const SingleBlogs = () => {

  const { id } = useParams()
  const navigate = useNavigate()


  const [blog, setBlog] = useState();

  const fetchBlog = async () => {
    const response = await axios.get(`https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs/${id}`)
    if (response.status == 200) {
      setBlog(response.data)
      
    }
  }

  //delete blog

  const deleteBlog = async () =>{
    const response = await axios.delete(`https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs/${id}`)
    if(response.status == 200){
      navigate('/')
    }
  }



  useEffect(()=>{
    fetchBlog()
  },[])


  return (
    <>
    
    <div className="blog-container">
        <div className="blog-header">
            <img src={blog?.avatar} alt="Author Avatar" class="blog-avatar" />
            <h1 className="blog-title">{blog?.title}</h1>
        </div>
        <p className="blog-description">
          {blog?.description}
        </p>
      <button className='btn' onClick={()=>deleteBlog()}>Delete</button>
      <button className='btn' onClick={()=>navigate(`/editBlog/${id}`)}>Edit</button>
    </div>
    </>
  )
}

export default SingleBlogs