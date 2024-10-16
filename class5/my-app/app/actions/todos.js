"use server"

import { revalidatePath } from "next/cache"



export async function AddTodo(formdata) {
    const todo = formdata.get("todoInput")
    try {
        
        await fetch('http://localhost:3000/api/products',{
            method : "POST",
            body : JSON.stringify({todo})
        }) // yahans say hum post ki request kreingy mtlb yahan say data behjeingy or ye jaiga api wale post ky function mai or wahan obj mai
    
    
        // nowthis refresh the page 
        revalidatePath("/todos")
    } catch (error) {
        console.log("error",error.message);
        
    }
}