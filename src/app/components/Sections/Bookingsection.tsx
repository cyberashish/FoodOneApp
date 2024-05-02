"use client"

import Image from "next/image"
import booking_bg from "/public/images/booking-bg.jpg"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation"


const Bookingsection = () => {
  const router = useRouter();
  const {data:session} = useSession();
   const [formdata,setFormData] = useState<any>({});
   const[alertInfo,setAlertInfo] = useState<String | null>();
   const handleChange = (e:any) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formdata,[key]:value});
   }
   const handleSubmit = async (e:any) => {
    e.preventDefault();
     if(session){
      if(formdata.totalperson==="Number of people"){
        alert("Choose at least 1 people")
      }
      else{
           try{
            const result = await axios.patch("/api/user",formdata);
            router.push("/user?booked='successful'");
            console.log(result);
           }catch(error){
            console.log(error);
            setAlertInfo("error");
           }
      }
     }
     else{
      setAlertInfo("error")
     }
   }
   useEffect(()=>{
    if(alertInfo){
      toast.error("User Must be LoggedIn");
    }
   },[alertInfo])
  return (
    <>
      <div className="container py-12">
         <div className="grid grid-cols-12">
            <div className="lg:col-span-6 col-span-12 flex">
                  <Image src={booking_bg} alt="booking-bg" />
            </div>
            <div className="lg:col-span-6 col-span-12 p-12 bg-tertiary">
                <span className="text-xl font-body font-normal relative after:absolute after:top-1/2 after:-right-12 after:-translate-y-1/2 after:w-10 after:h-[2px] after:bg-primary text-primary">Reservation</span>
                <h2 className="text-[40px] font-medium text-white">Book a Table Online</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6 mt-8">
            <div className="lg:col-span-6 col-span-12">
            <input type="text" id="input-label2" className="py-3.5 px-4 font-display font-medium text-base block w-full border-gray-200 rounded-lg " name="firstname" onChange={handleChange} placeholder="First Name"/> 
            </div>                  
            <div className="lg:col-span-6 col-span-12">
            <input type="email" id="input-label3" className="py-3.5 px-4 font-display font-medium text-base block w-full border-gray-200 rounded-lg " name="email" onChange={handleChange} placeholder="Your Email"/> 
            </div>                  
            <div className="lg:col-span-6 col-span-12">
            <input type="date" id="input-label4" className="py-3 px-4 font-display font-medium text-base block w-full border-gray-200 rounded-lg " name="date" onChange={handleChange} placeholder="Your Email"/> 
            </div>                  
            <div className="lg:col-span-6 col-span-12">
            <select name="totalperson" onChange={handleChange} className="py-[15px] px-4 pe-9 block w-full border-gray-200 rounded-lg font-medium text-base font-display" required>
            <option  className="font-display text-base font-medium">Number of people</option>
            <option value={1} className="font-display text-base font-medium">1</option>
            <option value={2} className="font-display text-base font-medium">2</option>
            <option value={3} className="font-display text-base font-medium">3</option>
            </select>
            </div>    
            <div className="col-span-12">
            <textarea name="request" onChange={handleChange} className="py-3.5 font-display text-base font-medium px-4 block w-full border-gray-200 rounded-lg " rows={4} placeholder="Special Request"></textarea>
            </div>  
            <div className="col-span-12">
            <div>
            <button type="submit" className="btn w-full uppercase ">book now</button> 
                <ToastContainer/>
              </div>     
            </div>
            </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default Bookingsection
