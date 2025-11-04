import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-8 gap-5 justify-between'>
        <div className='px-9 py-6 rounded-xl w-1/2 bg-amber-700 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-semibold'>Active Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-1/2 bg-blue-600 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-1/2 bg-green-600 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.complete}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='px-9 py-6 rounded-xl w-1/2 bg-red-600 gap-5'>
            <h2 className='text-2xl font-bold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber