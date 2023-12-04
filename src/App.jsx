import React from 'react'
// import api from './api/api'
import Home from './home/Home'
import Languages from './home/pages/languages'
// import { useEffect } from 'react'
// import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'
import { BrowserRouter , Route , Routes } from 'react-router-dom'


const App = () => {

    // let userOfToken = async ()=>{
    //     await api.get('/user',{
    //       withCredentials: true,
    //       headers: {
           
    //           Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    
    
    //       }}).then((res)=>{
    //         dispatch(setUser(res.data))
    //       }).catch((err)=>{
    //         localStorage.removeItem('token')
    //         dispatch(setIsloged())
    //       })
    //   }
    // useEffect(()=>{
    // if(isLoged){
    //   userOfToken()
    // }
    //  },[isLoged])
    
  return (
  <>
    <BrowserRouter>
    <Routes>
      {/* this routes the user does not need to be authenticated */}
      {/* <Route> */}
        {/* auth for Auth */}

      {/* </Route> */}
      {/* this routes the user  need to be authenticated */}

      {/* <Route element={<ProtectedRoutes />}> */}
         {/* this routes is for the admins*/}
      {/* </Route> */}

      {/* this routes is for all */}
    {/* <Route path='/' element={
       <Home/>
    }> */}

        {/* Routes for Home */}
      
    {/* </Route> */}

      <Route path='/' element={
        <Languages/>
      }/>
    </Routes>
   
  
  </BrowserRouter>
  </>
  )
}

export default App