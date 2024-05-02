"use client"
import GoogleSignIn from "@/app/components/authentication/GoogleSignIn";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignInResponse {
  error:String,
  ok:boolean,
  status:number,
  url:null | String
}
const Login = () => {
  const[formdata,setformdata] = useState({email:"",password:""});
  const router = useRouter();
  const[error,seterror] = useState<SignInResponse>();

  const handleChange = (e:any) => {
  let key = e.target.name;
  let value = e.target.value;
  setformdata({...formdata,[key]:value});
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
   const status =  await signIn('credentials',{
      redirect:false,
      email:formdata?.email,
      password:formdata?.password,
      callbackUrl:"/user"
    });

    if(status?.ok){
      router.push('/user')
    }
    else{
      console.log("error hai bhaiya",status);
      let info = status?.error;
      /* @ts-expect-error Async server compoent*/
      seterror(status);
    }
  }
  useEffect(()=>{
    
    console.log(error);
    if(error){
      toast.error(error.error);
    }
  },[error])

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
                  <GoogleSignIn/>
                  <p className="my-6 text-center after">Or signIn with</p>
                  <form onSubmit={handleSubmit}>
                    <div className="w-full mb-4">
                      <label
                       htmlFor="input-label"
                        className="block text-sm font-normal mb-2 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        id="input-label"
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
                        name="password"
                        onChange={handleChange}
                        id="input-label"
                        className="py-3 px-4 block leading-tight border-2 w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none font-normal"
                        placeholder="*******" required
                      />
                      <div>
                      <button className="btn py-2.5 my-4" type="submit">Submit</button>
                      <ToastContainer />
                      </div>
                    </div>
                  </form>
                </div>
                <p className="text-base text-center">Don't have a account? <Link href="/auth/signup/"><span className="font-medium text-primary">Register Here</span></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login
