import React from 'react'

const ListCompleteTask = ({data}) => {
    return (
        <div className='shrink-0  h-full w-[300px] p-5 bg-green-300 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-xl font-bold rounded px-3 py-1'>{data.category}</h3>
                <h4 className='text-sm font-semibold'>{data.date}</h4>
            </div>
            <h3 className='text-2xl font-bold mt-2'>{data.title}</h3>
            <p className='font-semibold text-sm mt-2'>{data.description}</p>
            <div className='mt-4'>
                <button className='bg-amber-500 px-1 py-1 text-sm cursor-pointer active:scale-95'>Completed</button>
            </div>
        </div>
    )
}

export default ListCompleteTask