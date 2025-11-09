import React, { useEffect, useState, useContext } from 'react'
import Login from './authPage/Login'
import EmpDashboard from './dashboard/EmpDashboard'
import AdminDashboard from './dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // this useState is for Role status like User or admin
  const [user, setUser] = useState(null)
  // console.log("logged in user ",user)

  const [loggedInUserData, setLoggedInUserData] = useState(null)
  // console.log("App ",loggedInUserData)

  // This for localStorage data and context provider
  const AuthData = useContext(AuthContext);
  // console.log("Auth data With fn ",AuthData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    // console.log("OUT side useEffect ",loggedInUser)
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      // console.log("In side useEffect ",{user})
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const HandleLogin = (email, password) => {
    if (AuthData) {
      const employee = AuthData.employees.find((e) => e.email === email && e.password === password);
      const admin = AuthData.admin.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return;
      }
      else if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
        return;
      }
      else {
        alert("Invalid Credentials");
      }
    }
   else{
    alert("Data Not Available")
   }
  };


  return (
    <>
    {/* <h1>{user}</h1> */}
      {!user ? <Login HandleLogin={HandleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser = {setUser} data={loggedInUserData}/> : (user == 'employee' ? <EmpDashboard changeUser = {setUser} data={loggedInUserData} /> : '')}
    </>
  )
}

export default App
