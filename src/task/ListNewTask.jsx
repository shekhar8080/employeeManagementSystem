import React from 'react'

const ListNewTask = () => {
    return (
        <div className='shrink-0  h-full w-[300px] p-5 bg-red-300 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-xl font-bold rounded px-3 py-1'>High</h3>
                <h4 className='text-sm font-semibold'>03 Nov 2025</h4>
            </div>
            <h3 className='text-2xl font-bold mt-2'>This is Youtube Video</h3>
            <p className='font-semibold text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius voluptatibus nobis aliquid, culpa deserunt. Sit sapiente totam quibusdam molestias.</p>
            <div className='mt-4'>
                <button className='bg-green-500 px-1 py-1 text-sm cursor-pointer active:scale-95'>Accept Task</button>
            </div>
        </div>
    )
}

export default ListNewTask