import React from 'react'

const CompletedTask = ({taskCount}) => {
    return (
        <div className='px-9 py-6 rounded-xl w-1/2 bg-green-600 gap-5'>
            <h2 className='text-2xl font-bold'>{taskCount.taskCount.complete}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
    )
}

export default CompletedTask