import React from 'react'
import ListNewTask from './ListNewTask'
import ListActiveTask from './ListActiveTask'
import ListCompleteTask from './ListCompleteTask'
import ListFailedTask from './ListFailedTask'

const TaskList = ({data}) => {
    // console.log("TaskList")
    // console.log(data.tasks)
    return (
        <div id='tasklist' className='flex items-center justify-start flex-nowrap gap-3 overflow-x-auto h-[58%] w-full py-5 mt-10'>
            {data.tasks.map((e, idx)=>{
                if(e.active){
                    return <ListActiveTask key={idx} data = {e}/>
                }
                if(e.newTask){
                    return <ListNewTask key={idx} data = {e} />
                }
                if(e.complete){
                    return <ListCompleteTask key={idx} data = {e} />
                }
                if(e.failed){
                    return <ListFailedTask key={idx} data = {e} />
                }
            })}
        </div>
    )
}

export default TaskList