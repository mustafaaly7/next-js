"use client"

import Link from "next/link";
import { useState } from "react";
import { DeleteTodo, Updatetodo } from "../actions/todos";

export default function Listitem({ todo }) {
const [ edit,setEdit] = useState(false)
const [task,setTask] = useState('')
const onCompleted =async ()=>{
    let obj = {...todo}
    obj.isCompleted = !obj.isCompleted
    await Updatetodo(obj)
}
const onEdit =async ()=>{
if(edit){
let obj = todo
obj.todo = task
await Updatetodo(obj)
setEdit(false)
setTask('')


}else{
setEdit(true)
setTask(todo.todo)
}


}
const onDelete =async ()=>{
    let obj  = todo
    await DeleteTodo(obj)
}

    return (
        <>
        <div className={` flex text-center text-2xl p-2 mx-auto font-bold border w-1/2 m-1 ${todo.isCompleted ? "bg-teal-100" : "bg-white"}`}>

{edit ? <input className="flex flex-grow border text-black" value={task} onChange={(e)=>setTask(e.target.value)}   /> :  
            <Link href={`/todos/${todo.todo}`} className="w-1/2 flex flex-grow">
                <h1 className="flex flex-grow"> {todo.todo}</h1>
            </Link>
}

<button onClick={onCompleted} className="border bg-blue-200 p-1 px-2 mx-1">
    {!todo.isCompleted ? "Done" : "Not Done"}
</button>
<button className="border bg-green-200 p-1 px-2 mx-1 "onClick={onEdit}>
    Edit
</button>
<button onClick={onDelete} className="border bg-red-200 p-1 px-2 mx-1">
    Delete
</button>
 
        </div>

        </>
    )

} 