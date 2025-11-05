import React, { useEffect, useState, useContext } from 'react'
import Login from './authPage/Login'
import EmpDashboard from './dashboard/EmpDashboard'
import AdminDashboard from './dashboard/AdminDashboard'
import { setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // this useState is for Role status like User or admin
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  console.log(loggedInUserData)

  // This for localStorage data and context provider
  const AuthData = useContext(AuthContext);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.role)
    }
  }, [])


  const HandleLogin = (email, password) => {
    if (AuthData) {
      const admin = AuthData.admin.find((e) => e.email === email && e.password === password);
      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        return; // Exit after successful admin login
      }

      const employee = AuthData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
        return; // Exit after successful employee login
      }
    }

    alert("Invalid Credentials");
  };





  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData}/> : (user == 'employee' ? <EmpDashboard data={loggedInUserData} /> : null)}

    </>
  )
}

export default App
