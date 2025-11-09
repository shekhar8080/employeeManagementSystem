import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../task/TaskList'

const EmpDashboard = (props) => {

  // console.log('EmpDashboard',data)
  return (
    <div className=' bg-[#222222] h-screen p-6'>
        <Header changeUser= {props.changeUser} data = {props.data}/>
        <TaskListNumber data = {props.data}/>
        <TaskList data = {props.data}/>
    </div>
  )
}

export default EmpDashboard