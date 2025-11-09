import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
    const AuthData = useContext(AuthContext);
    console.log("inside All task",AuthData)

    const {userData} = useContext(AuthContext)
    const employees = userData?.employees || [];
    return (
        <div id='allTask' className='bg-[#1c1c1c] p-5 mt-3 h-100  rounded'>

            <div className='flex justify-between mb-3 bg-blue-400 px-4 py-2 rounded'>
                <h2 className=' font-bold'>Employees Name</h2>
                <h3 className=' font-bold'>Active Task</h3>
                <h3 className=' font-bold'>New Task</h3>
                <h3 className=' font-bold'>Completed Task</h3>
                <h3 className=' font-bold'>Failed Task</h3>
            </div>
            <div className='overflow-auto'>
                {employees.map((elem,idx) => {
                    return <div key={idx} className='flex items-center justify-between mb-3 border-2 border-purple-600 px-4 py-2 rounded'>
                        <h2 className='text-lg font-semibold w-18'>{elem.firstName}</h2>
                        <h3 className='text-lg font-semibold '>{elem.taskCount.active}</h3>
                        <h3 className='text-lg font-semibold '>{elem.taskCount.newTask}</h3>
                        <h3 className='text-lg font-semibold '>{elem.taskCount.complete}</h3>
                        <h3 className='text-lg font-semibold '>{elem.taskCount.failed}</h3>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask