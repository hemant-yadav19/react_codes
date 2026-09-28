import React, { useState } from 'react'

export function App1() {
    
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    
    const submmitHandler = (e)=>{
        e.preventDefault();

        const copyTask = [...task];
        copyTask.push({title,details});
        setTask(copyTask);
        setDetails("");
        setTitle("");
    }


    return (
    <div>
        
        {/* <h1>{todo}</h1> */}
        <form onSubmit={(e)=>{
            submmitHandler(e)
        }}>
            <div>
                <input type='text' onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder='Enter your name...'/>
                <input  type='text' onChange={(e)=>{setDetails(e.target.value)}} value={details} placeholder='enter details'/>   
                <button >click</button>

            </div>
           
        </form>
        {task.map((elem,idx )=>{
            return(<div key={idx}>
            <h1>{elem.title}</h1>
            <h5>{elem.details}</h5>
            </div>)
        })}
    </div>
  )
}
