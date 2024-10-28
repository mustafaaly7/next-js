import { Connectdb } from "../lib/dbConnect";

export async function GET(request) {
    await Connectdb()
return Response.json({
    todos : []
    ,msg : "worked good "
})
}
