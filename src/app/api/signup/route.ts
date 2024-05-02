import connectDB from "@/lib/connectDB";
import usermodel from "@/model/user";
import { NextResponse } from "next/server";

export async function POST(req:any){
   await connectDB();
   const body = await req.json();
  try{
    const existinguser = await usermodel.findOne({email:body.email});
    console.log(existinguser);
    if(existinguser){
      return NextResponse.json({'msg':"User already registered"},{status:400});
    }else{
      const doc = await usermodel.create(body);
      return NextResponse.json(doc,{status:201});
    }
  }catch(error){
    console.log("error hai bhai");
    return NextResponse.json(error,{status:400});
  }

}