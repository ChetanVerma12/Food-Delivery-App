import mongoose from "mongoose";

export const connectDB = async ()=>{
      await mongoose.connect('mongodb+srv://chetan25cs039:chetan1234@cluster0.o3f3e3s.mongodb.net/Food-Delivery-App').then(()=>console.log("DB Connected!"));
}