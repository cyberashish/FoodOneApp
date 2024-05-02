"use client"

import AlertComp from "@/app/components/MiniComponents/AlertComp";
import GoogleSignUp from "@/app/components/authentication/GoogleSignUp";
import connectDB from "@/lib/connectDB";
import usermodel from "@/model/user";
import axios from "axios";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const [formdata,setformdata] = useState({});
  const [namedata,setnamedata] = useState("");
  const [emaildata,setemaildata] = useState("");
  const [passworddata,setpassworddata] = useState("");
  const[alertInfo , setAlertInfo] = useState<any | null>();
  

 const handlechange = (e:any) => {
  let key = e.target.name;
  let value = e.target.value;
   setformdata({...formdata,[key]:value});
 }

 const handleSubmit = async (e:any) => {
  e.preventDefault();
 try{
  const result = await axios.post("/api/signup",formdata);
  console.log(result);
  setnamedata("");
  setemaildata("");
  setpassworddata("");
  setAlertInfo({success:"User registered successfully"});
 }catch(error:any){
  console.log(error);
  setnamedata("");
  setemaildata("");
  setpassworddata("");
  setAlertInfo({error:"User already existed"});
 }
 }

 useEffect(()=>{
     if(alertInfo?.success){
      console.log(alertInfo);
      toast.success(alertInfo.success)
     }
     else if(alertInfo?.error){
      console.log(alertInfo);
      toast.error(alertInfo.error)
     }
 },[alertInfo])

  return (
    <>
      <div className="w-100 mt-20">
        <div className="container h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="lg:col-span-5">
              <img
                src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?t=st=1714460071~exp=1714463671~hmac=12c59b762227b8f6debd362f568f5cb2737aeb3eb2f7d9fb58a5bea48b6c58df&w=740"
                alt=""
              />
            </div>
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="card w-full">
                <div className="card-body">
                  <GoogleSignUp/>
                  <p className="my-6 text-center">Or signUp with</p>
                  <form onSubmit={handleSubmit}>
                    <div className="w-full mb-4">
                      <label
                       htmlFor="input-label"
                        className="block text-sm font-normal mb-2 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="name"
                        name='name'
                        id="input-label"
                        value={namedata}
                        onChange={(e)=>{
                          setnamedata(e.target.value);
                          handlechange(e);
                        }}
                        className="py-3 px-4 block leading-tight border-2 w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none font-normal"
                        placeholder="John Doe" required
                      />
                    </div>
                    <div className="w-full mb-4">
                      <label
                       htmlFor="input-label"
                        className="block text-sm font-normal mb-2 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name='email'
                        id="input-label"
                        value={emaildata}
                        onChange={(e)=>{
                          setemaildata(e.target.value);
                          handlechange(e);
                        }}
                        className="py-3 px-4 block leading-tight border-2 w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none font-normal"
                        placeholder="you@site.com" required
                      />
                    </div>
                    <div className="w-full mb-3">
                      <label
                       htmlFor="input-label"
                        className="block text-sm font-normal mb-2 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name='password'
                        id="input-label"
                        value={passworddata}
                        onChange={(e)=>{
                          setpassworddata(e.target.value);
                          handlechange(e);
                        }}
                        className="py-3 px-4 block leading-tight border-2 w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none font-normal"
                        placeholder="*******" required
                      />
                    </div>
                    <div>
                    <button className="btn py-2.5 my-4" type="submit">Submit</button>
                    <ToastContainer/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SignUp
