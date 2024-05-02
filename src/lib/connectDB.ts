import mongoose from "mongoose"

export default async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("connected successfully....")
    }catch(error){
        console.log(error);
    }
}