import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../task/TaskList'

const EmpDashboard = ({data}) => {
  return (
    <div className=' bg-[#222222] h-screen p-6'>
        <Header data = {data}/>
        <TaskListNumber data = {data}/>
        <TaskList data = {data}/>
    </div>
  )
}

export default EmpDashboard