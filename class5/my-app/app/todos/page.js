import Image from "next/image";
import Link from "next/link";
import { AddTodo } from "../actions/todos";
import Form from "../components/formdata";
import Listitem from "../components/listitem";

export default async function Home() {
  let todos = await fetch("http://localhost:3000/api/products", { cache: "no-cache" })
  todos = await todos.json()


  return (
    <>

      <div> <h1 className="text-4xl text-center my-6">TODOS</h1></div>
<Form/>
      
      {todos.data.map((todo) => (
        <Listitem todo={todo} key={todo.id}/>
      ))}



    </>
  );
}
