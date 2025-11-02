import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../task/TaskList'

const EmpDashboard = () => {
  return (
    <div className=' bg-[#222222] h-screen p-6'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmpDashboard