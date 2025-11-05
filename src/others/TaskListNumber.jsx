import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskListNumber = ({data}) => {
    // console.log(data.taskCount)
  return (
    <div className='flex mt-8 gap-5 justify-between'>
        <ActiveTask taskCount = {data.taskCount}/>
        
        <NewTask taskCount = {data.taskCount}/>

        <CompletedTask taskCount = {data.taskCount}/>
        
        <FailedTask taskCount = {data.taskCount}/>
    </div>
  )
}

export default TaskListNumber