import React, { useEffect, useState } from 'react'
import './AllBlogs.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllBlogs = () => {

  const navigate = useNavigate()

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async() => {

    const response = await axios.get('https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs')
    if (response.status == 200) {

      console.log(response.data)
      setBlogs(response.data)
    }

  }

  useEffect(() => {
    fetchBlogs()

  }, [])

  return (
    <>

      <div> </div>

      <div text='' style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap:'wrap', rowGap:'15px' }}>
        {
          blogs.map((blog) => {
            return (
              
                <div className="card" key={blog.id}>
                  <img src={blog.avatar} alt="Avatar" width='100%' />
                  <div className="container">
                    <h4><b>{blog.title}</b></h4>
                    <p>{blog.description}</p>
                    <p>{blog.createdAt}</p>
                    <p>{blog.id}</p>
                  </div>
                  <p onClick={()=>navigate(`/singleblogs/${blog.id} `)} style={{textAlign:'center'}}>See More</p>
                </div>
              
            )
          })
        }
      </div>

    </>


  )
}

export default AllBlogs