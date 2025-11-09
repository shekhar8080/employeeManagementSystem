import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  
  const {userData, setUserData} = useContext(AuthContext)
  const employees = userData?.employees || [];
  
  // console.log("AuthData",userData)
  // console.log('emplo',employees)
  
  const [newTask, setNewTask] = useState({})

  const SubmitHandler = (e)=>{
    e.preventDefault()
    const newTaskObj = {taskTitle, date, assignTo, category, description,active:false, newTask:true, complete:false, failed:false };
    
    // const data = JSON.parse(localStorage.getItem('employees'))
    employees.forEach((elem)=>{
      console.log(elem)
      if(assignTo == elem.firstName){
        elem.tasks.push(newTaskObj)
        elem.taskCount.newTask = elem.taskCount.newTask + 1
        console.log('NewTaskOBJ',newTaskObj)
      }
    })

    // setUserData(employees)
    setUserData((prev) => ({ ...prev, employees }));
    console.log('after setting the data',employees)
    

    setTaskTitle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')

  };


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          SubmitHandler(e)
        }} className='flex w-full flex-wrap items-start justify-between'>

          {/* All input */}
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
              <input value = {taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' type="text" placeholder='Make a UI Design' 
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input value = {date} 
              onChange={(e)=>{
                setDate(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' type="date" 
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input value = {assignTo} 
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5'  type="text" placeholder='Employee Name' 
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input value = {category} 
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5'  type="text" placeholder='Design, Dev, etc' 
              />
            </div>
          </div>

          {/* only description */}
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value = {description} 
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400' name="" id="" cols="30" rows="10">

            </textarea>
          <button className='bg-emerald-500 py-3 text-sm hover:bg-emerald-600 rounded cursor-pointer mt-4 w-full'>Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask