import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/ALLBLOGS'
import SingleBlogs from './pages/SingleBlogs/SingleBlogs'
import EditBlog from './pages/EditBlog/EditBlog'
import CreateBlog from './pages/CreateBlog/CreateBlog'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/about' element = {<Contact/>} /> */}

        <Route path='/' element = {<AllBlogs />} />
        <Route path='/singleblogs/:id' element = {<SingleBlogs />} />
        <Route path='/editBlog/:id' element = {<EditBlog />} />
        <Route path='/createblog' element = {<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
