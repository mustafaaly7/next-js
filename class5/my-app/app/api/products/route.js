

const todos = [
    {
     todo:   "task1",id:1,isCompleted : false,
    },
    {
        todo:   "task2",id:2,isCompleted : false,
       },{
        todo:   "task3",id:3,isCompleted : false,
       },{
        todo:   "task4",id:4,isCompleted : false,
       },{
        todo:   "task5",id:5,isCompleted : false,
       },]
export async function GET(request) {
return Response.json(
    {
        data : todos,
        msg : "todos fetched succesfully"
    }
)

}

export async function POST(request) {
const data = await request.json()

const obj ={
    ...data,
    isCompleted: false,
    id : todos.length+1,
} 
todos.push(obj)
return Response.json({
    data : todos,
    msg : "data added succesfully"
})




}




