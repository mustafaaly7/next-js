const quotes = [
  { quote: "You're what you eat" },
  { quote: "Knowledge is power" },
  { quote: "To be or not to be" },
  { quote: "The only thing we have to fear is fear itself" },
  { quote: "I think, therefore I am" },
  { quote: "That which does not kill us makes us stronger" },
  { quote: "The unexamined life is not worth living" }
];



export async function GET(){

return Response.json({
data: quotes,
})

}

export async function POST(request){

const myEdit = await request.json() // api ko request bhejte hain 
//i saved it in var name myEdit to mai jo bh quote postman say bhejunga woh idhar aiga request mai hum request bhejte hain 
// and ata response hai 

console.log(myEdit);

quotes.push(myEdit)
  return Response.json({
    //humein response ata hai 
    quotes : quotes ,
    msg : "hello"
  })
  
  }
