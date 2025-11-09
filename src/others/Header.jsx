import React from 'react'

const Header = (props) => {


const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  // localStorage.clear()
  // window.location.reload()
  props.changeUser('')
}

  return (
    <div className='flex justify-between '>
        <h1 className='text-3xl font-medium'>Hii, <br/> <span className='font-semibold '>{props.data.firstName}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 px-10 py-2 rounded-md cursor-pointer active:scale-95 text-white font-bold'>Log Out</button>
    </div>
  )
}

export default Header