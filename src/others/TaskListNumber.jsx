import React from 'react'
import ActiveTask from './ActiveTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskListNumber = ({data}) => {
    // console.log('TaskListNumber',data.taskCount.active)
  return (
    <div className='flex mt-8 gap-5 justify-between'>
        <ActiveTask taskCount = {data}/>
        
        <NewTask taskCount = {data}/>

        <CompletedTask taskCount = {data}/>
        
        <FailedTask taskCount = {data}/>
    </div>
  )
}

export default TaskListNumber