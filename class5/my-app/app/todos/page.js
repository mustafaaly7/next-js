import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let todos = await fetch("http://localhost:3000/api/products", { cache: "no-cache" })
  todos = await todos.json()


  return (
    <>

      <div> <h1 className="text-4xl text-center my-6">TODOS</h1></div>

      <div className="flex justify-center gap-2 items-center mx-auto w-1/2">
        <input placeholder="Enter your todos" className="w-1/2 border" />
        <button className="border bg-blue-400 text-white">Add Todo </button>





      </div>
      {todos.data.map((todo) => (
        <Link key={todos.id} href={`/todos/${todo.todo}`} className="w-1/4">
          <h1 className="text-center text-2xl p-2 mx-auto font-bold border w-1/4 m-1"> {todo.todo}</h1>
        </Link>
      ))}



    </>
  );
}
