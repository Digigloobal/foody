import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://phogatmanjeet123:MF596R88Nh7aNEm6@cluster0.czn97yo.mongodb.net/foodDatabase').then(()=>console.log("DB Connected")).catch((error)=>
        console.log("db not connected"));
    

}
