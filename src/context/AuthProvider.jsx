import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
        // localStorage.setItem('employees','')
        // localStorage.setItem('admin','')
        // localStorage.removeItem('employees')
        // localStorage.removeItem('admin')
    }, [])



    return (
        <div>
            <AuthContext.Provider value={{userData, setUserData}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider