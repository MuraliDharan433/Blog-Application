import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import PrivateRoute from './utils/PrivateRoute'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />

      <Route path='/create' element={<PrivateRoute>
        <CreatePost/>
      </PrivateRoute>} />

      <Route path='/edit/:id' element={<PrivateRoute>
        <EditPost />
      </PrivateRoute>} />

      <Route path='*' element={<NotFound/>} />
      
    </Routes>

    </BrowserRouter>
    
  )
}

export default App