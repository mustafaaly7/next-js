import mongoose from "mongoose";


export async function Connectdb() {
    let isConnect = false
    if(isConnect = true) return "DB connected succesfully"
    try {
        let connected = await mongoose.connect(process.env.MONGODB_URI) // this is to connect mongodb into mongoose library 
        console.log("DB connect hogya ");
        
        if(connected.connection.readyState == 1) isConnect =true  //now this connected.connection.readystate if its equal to 1 means the mongodb is connected  so we created a condition so it wont run again and again like we created a flag it'll return the function once isconnect flag goes true after one time connected 
    } catch (error) {
        console.log(error.message);

    }
}