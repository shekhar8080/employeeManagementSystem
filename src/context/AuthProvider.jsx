import React, { createContext, useEffect, useState } from 'react'
import { getLoaclStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLoaclStorage()
        setUserData({ employees, admin })
    }, [])



    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider