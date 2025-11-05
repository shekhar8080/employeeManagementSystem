import React from 'react'

const FailedTask = (data) => {
    return (
        <div className='px-9 py-6 rounded-xl w-1/2 bg-red-600 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
    )
}

export default FailedTask