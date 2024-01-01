import React from 'react'
// import api from './api/api'
import Home from './home/Home'
// import { useEffect } from 'react'
// import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Loading from './home/components/Loading'
import Quiz from './home/pages/Quiz'
import { lazy , Suspense } from 'react';
const Languages = lazy(()=> import('./home/pages/languages'))
const Index = lazy(()=> import('./home/pages/Index'))
const Login = lazy(()=> import('./auth/Login'))
const Blog = lazy(()=> import('./home/pages/Blog') )
const Courses = lazy(()=> import('./home/pages/Courses') )
const BlogItem = lazy(() => import('./home/pages/BlogItem'))
const MyEditor = lazy(()=> import('./home/components/MonitorEditor'))
const NotFound = lazy(()=>import('./home/pages/NotFound'))
const Register = lazy(() => import('./auth/Register'))
const Profile  = lazy(() => import('./home/pages/Userprofile'))
const UpdateProfile = lazy(()=> import('./home/components/updateExtra'))


const App = () => {
    
  return (
  <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={
        <Home/>
      }>

        <Route index element={
          <Suspense fallback={<Loading/>}>
            <Index/>
          </Suspense>
        }/>

        <Route path='/language/:name/:slug' element={
          <Suspense fallback={<Loading/>}>
            <Languages/>
          </Suspense>
        }/>
        <Route path='/login' element={
          <Suspense fallback={<Loading/>}>
            <Login/>
          </Suspense>
        }/>
        <Route path='/register' element={
          <Suspense fallback={<Loading/>}>
            <Register/>
          </Suspense>
        }/>
        <Route path='/blogs' element={
          <Suspense fallback={<Loading/>}>
            <Blog/>
          </Suspense>
        }/>
        <Route path='/courses' element={
          <Suspense fallback={<Loading/>}>
            <Courses/>
          </Suspense>
        }/>
        <Route path='/profile' element={
          <Suspense fallback={<Loading/>}>
            <Profile/>
          </Suspense>
        }/>
        <Route path='/update' element={
          <Suspense fallback={<Loading/>}>
            <UpdateProfile/>
          </Suspense>
        }/>
        <Route path='/blogs/:title/:slug' element={
          <Suspense fallback={<Loading/>}>
            <BlogItem/>
          </Suspense>
        }/>
         
        <Route path='*' element={
          <Suspense fallback={<Loading/>}>
            <NotFound/>
          </Suspense>
      }/>
        <Route path='/quiz/:name' element={<Quiz/>}/>
      </Route>
      <Route path='/editor' element={
          <Suspense fallback={<Loading/>}>
            <MyEditor/>
          </Suspense>
        }/>
      
    </Routes>
    
  

  </BrowserRouter>
  </>
  )
}

export default App