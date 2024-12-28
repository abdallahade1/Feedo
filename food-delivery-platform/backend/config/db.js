import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://abdallahabdallah:1332004@cluster0.ebqxk.mongodb.net/food-delivery-platform').then(console.log("DB Connected"));
};
