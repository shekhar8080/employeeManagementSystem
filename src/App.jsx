import React, { useEffect, useState, useContext } from 'react'
import Login from './authPage/Login'
import EmpDashboard from './dashboard/EmpDashboard'
import AdminDashboard from './dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, setUser] = useState(null)
    
const HandleLogin = (email, password)=>{
  if(email == 'admin@me.com' && password == 123){
    setUser('admin')
  } else if(email == 'user@me.com' && password == 123){
     setUser('employee') 
  }
  else {
    alert("Invalid Credentials")
  }
}

const data = useContext(AuthContext);
console.log(data)



  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmpDashboard />}
    </>
  )
}

export default App
