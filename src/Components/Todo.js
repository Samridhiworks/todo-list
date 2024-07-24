import React, { useState } from 'react';

const Todo = ()=>{
    let [task,setTask] = useState('')
    let [tasks,setTasks]= useState([])
    // let [tasks,setTasks] = useState((localStorage.getItem('tasks')!=undefined)?function(){

    //     let t= localStorage.getItem('tasks')
    //     return t
    // }:'')

    let handleinput=(e)=>{
        setTask(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();

        let a=[...tasks,task]
        setTasks(a)
        
        setTask('')
        localStorage.setItem("tasks",tasks)
    }

    let clear=()=>{
        setTasks('')
    }
    let counter = 0
    


    return(
        <>
      <h1 style={{textAlign: "center"}}>TODO LIST</h1>
        <div className='container'>
            
            <form action='' method='' onSubmit={handleSubmit}>
                <input type='text' onChange={handleinput} value={task}/>
                <button >Add Task</button>
            </form>

            <ul>
                {(tasks.length!=0)?tasks.map((item)=>(
                    <li key={counter++}>{item}</li>
                )):''}
            </ul>

            <button onClick={clear} style={{background :"red"}}>Clear Tasks</button>

        </div>
        </>
    )
}

export default Todo;