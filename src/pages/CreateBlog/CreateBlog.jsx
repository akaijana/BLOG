import React, { useEffect, useState } from 'react'
import './CreateBlog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()

  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')
  // const [image, setImage] = useState('')

  // console.log(title,'title')
  // console.log(description,'description')
  // console.log(image,'image')

const createBlog = async(e) =>{
  e.preventDefault()
  
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)
  console.log(data)

  // const data = {
  //   title: title,
  //   description: description,
  //   avatar: image
  // }
  const response = await axios.post('https://6769715dcbf3d7cefd3ad75d.mockapi.io/blogs/', data)
  if(response.status == 201){
    navigate('/')

  }else{
    alert('something went wrong')
  }
}

  //practice

  // const [number, setNumber] = useState(0)
  // const [number2, setNumber2] = useState(0)


  // jati choti render hunxaa yo run hunxa, jun state change huda ni
  // useEffect(() =>{
  //   console.log("hello")
  // })


  //pass gareko state name ma change aauda matra yo run hunxa
  // useEffect(() =>{

  //   console.log("hello")

  // },[number])

  //first page mount huda yo vitra ko code run hunxa
  // useEffect(()=>{
  //   console.log("hello")
  // },[])

  //practice end



  return (

    <>

      <div className="form-container">
        <form onSubmit={createBlog}>
          <h1>Submit Your Details</h1>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title"  name="title" required  />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required ></textarea>

          <label htmlFor="image">Upload Image:</label>
          <input type="text" id="image"  name="avatar" required />
          {/* <label htmlFor="title">Title:</label>
          <input type="text" id="title"  name="title" required onChange={(e)=>setTitle(e.target.value)} />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required onChange={(e)=>setDescription(e.target.value)}></textarea>

          <label htmlFor="image">Upload Image:</label>
          <input type="text" id="title"  name="title" required onChange={(e)=>setImage(e.target.value)}/> */}

          <button type="submit" value='Submit'>Submit</button>
        </form>
      </div>


      {/* <h1>{number}</h1>

    <button onClick={() => setNumber(number+1)}>increase</button>
    <h1>{number2}</h1>

    <button onClick={() => setNumber2(number2-1)}>decrease</button> */}
    </>



  )
}

export default CreateBlog