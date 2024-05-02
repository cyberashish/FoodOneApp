import connectDB from "@/lib/connectDB";
import usermodel from "@/model/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req:any){
   const body = await req.json();
   try{
      await connectDB();
      const doc = await usermodel.create(body);
     return NextResponse.json(doc,{status:201});
   }catch(error){
      return NextResponse.json(error)
   }
}

export async function PATCH(req:any){
   const session = await getServerSession();
   const body = await req.json();
 try{
   await connectDB();
   const doc = await usermodel.findOneAndUpdate({email:session?.user?.email},{bookinginfo:body});
   return NextResponse.json(doc,{status:200});
 }catch(error){
  return NextResponse.json(error,{status:400})
 }

}

export async function GET(req:any){
   const session = await getServerSession();
   try{
      await connectDB();
      const doc = await usermodel.findOne({email:session?.user?.email});
      return NextResponse.json(doc,{status:200});
   }catch(error){
      return NextResponse.json(error,{status:400})
   }
}