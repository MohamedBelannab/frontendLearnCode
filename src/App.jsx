import React from 'react'
import api from './api/api'

const App = () => {

    let userOfToken = async ()=>{
        await api.get('/user',{
          withCredentials: true,
          headers: {
           
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    
    
          }}).then((res)=>{
            dispatch(setUser(res.data))
          }).catch((err)=>{
            localStorage.removeItem('token')
            dispatch(setIsloged())
          })
      }
    useEffect(()=>{
    if(isLoged){
      userOfToken()
    }
     },[isLoged])
    
  return (
    <BrowserRouter>
    <Routes>
      {/* this routes the user does not need to be authenticated */}
      <Route element={<Auth />}>
        {/* auth for Auth */}

      </Route>
      {/* this routes the user  need to be authenticated */}

      <Route element={<ProtectedRoutes />}>
         {/* this routes is for the admins*/}
      </Route>

      {/* this routes is for all */}
    <Route path='/' element={
      <Suspense fallback={<Loading/>}>
       <Home/>
       </Suspense>
    }>

        {/* Routes for Home */}
      
    </Route>
    </Routes>
   
  
  </BrowserRouter>
  )
}

export default App