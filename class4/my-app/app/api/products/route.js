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
message : "Here Goes the Quotes"
})

}


export async function POST(){

  return Response.json({
  data: quotes,
  message : "Here Goes the Quotes"
  })
  
  }