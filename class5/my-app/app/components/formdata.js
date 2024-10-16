"use client"
import { useRef } from "react";
import { AddTodo } from "../actions/todos";
// ye sb action use client mai hoty hain is liye is ko use client krdiya 

export default async function Form() {
    const Formref = useRef(null) // it will remove the form ref means clearing the imput


    return(
        <>
        <form ref={Formref} action={async(formData)=>{
            await AddTodo(formData) // form ka data dega jo addtodo function mai jrha hay
            Formref.current?.reset() // and yahan woh current value ko reset krdega

        }} className="flex justify-center gap-2 items-center mx-auto w-1/2">
        <input placeholder="Enter your todos" className="w-1/2 border-2 p-2 flex flex-grow" name="todoInput" />
        <input type="submit" className="border bg-blue-400 text-white rounded p-2 cursor-pointer" value={"Add Todo"} /> 





      </form>
        </>
    )
}