import React, { useState } from 'react'

const Login = ({HandleLogin}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (e)=>{
        e.preventDefault()
        HandleLogin(email, password)
        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <div className='border-2 border-red-600 p-10'>
            <form 
                onSubmit={(e)=>{
                    formHandler(e)
                }}
                className='flex flex-col gap-4'
            >
                <input 
                value={email}
                onChange={(b)=>{
                    setEmail(b.target.value)
                }}
                required className='border-2 border-emerald-600 rounded-full text-xl outline-none px-5 py-3 placeholder:text-gray-400' type="email" placeholder='Enter Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 rounded-full text-xl outline-none px-5 py-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='rounded-full cursor-pointer text-xl outline-none px-5 py-3 bg-emerald-600'>LOG IN</button>
            </form>
        </div>
    </div>
  )
}

export default Login
