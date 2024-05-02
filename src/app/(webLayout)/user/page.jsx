"use client"
import axios from "axios";
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const user = () => {
 const {data:session} = useSession();
 const searchparams = useSearchParams();
 const [bookingInfo,setBookingInfo] = useState();

 const handleUserInfo = async () => {
   try{
    const result = await axios.get("/api/user");
    console.log(result);
    if(result.data.bookinginfo){
      setBookingInfo(result.data.bookinginfo);
    }
   }catch(error){
    console.log(error);
   }
 }

 useEffect(()=>{
  if(searchparams.get("booked")){
    toast.success("Your table  booked successfully");
  }
  handleUserInfo();

 },[])
 console.log(session);
  return (
    <>
     <div className="w-full h-96 flex relative" >
      <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover w-full" />
      <div className="bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 absolute">
       <div className="flex flex-col gap-2">
       <div className="w-40 h-40  rounded-full flex items-center justify-center overflow-hidden">
        <img src={session?.user?.image?session?.user?.image:"https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1714580324~exp=1714580924~hmac=faf606683fa27032043fe9edfc99c83502515bf936bf5c6892426ae21cfda28c"} alt="" className="w-full" />
      </div>
      <h2 className="fw-bold text-2xl text-center">{session?.user?.name}</h2>
       </div>
      </div>
     </div>
    <div className="container">
    <div className="flex gap-6 justify-center my-36">
        <div className="lg:w-1/2 w-full p-3 shadow-sm rounded-sm">
            <h1 className="font-medium text-3xl text-center mb-4">Bokking Information</h1>
          {bookingInfo?
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="text-base font-medium">Booking Name :</span> <span className="text-base font-normal">{bookingInfo.firstname}</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Booking mailId :</span> <span className="text-base font-normal">{bookingInfo.email}</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Selected Date:</span> <span className="text-base font-normal">{new Date(bookingInfo.date).toLocaleDateString('en-US')}</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Total Persons:</span> <span className="text-base font-normal">{bookingInfo.totalperson}</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Special Request:</span> <span className="text-base font-normal">{bookingInfo.request}</span>
             </div>
            </div>:<h1 className="text-center text-2xl fw-medium text-red-600">You haven't booked any table</h1>}
        </div>
        {/* <div className="lg:w-1/2 w-full p-3 shadow-sm rounded-sm">
            <h1 className="font-medium text-3xl text-center mb-4">Favourite dishes</h1>
            <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="text-base font-medium">Dish Name :</span> <span className="text-base font-normal">Punjabi Tadka</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Dish Name :</span> <span className="text-base font-normal">Punjabi Tadka</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Dish Name :</span> <span className="text-base font-normal">Punjabi Tadka</span>
             </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Dish Name :</span> <span className="text-base font-normal">Punjabi Tadka</span>
             </div>
            </div>
        </div> */}
      </div>
    </div>

     <ToastContainer/>
    </>
  )
}

export default user
