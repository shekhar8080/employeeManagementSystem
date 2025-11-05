import React from 'react'

const ActiveTask = ({data}) => {
    console.log(data)
    return (
        <div className='px-9 py-6 rounded-xl w-1/2 bg-amber-700 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>
    )
}

export default ActiveTask