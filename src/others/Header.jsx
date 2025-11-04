import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex justify-between '>
        <h1 className='text-3xl font-medium'>Hii, <br/> <span className='font-semibold '>{data.firstName}👋</span></h1>
        <button className='bg-red-600 px-10 py-2 rounded-md cursor-pointer active:scale-95 text-white font-bold'>Log Out</button>
    </div>
  )
}

export default Header