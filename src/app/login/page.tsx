'use client';
import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";




export default function LoginPage(){

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
    const [user, setUser] = React.useState({
        email:"",
        password:""

    })

    const onLogin = async ()=>{
      try{
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        toast.success("Login success");
        router.push("/profile")


      } catch(error:any){
        console.log("Login Failed", error.message);
        toast.error(error.message);
      } finally{
        setLoading(false);
      }

    }

    useEffect(()=>{
      if(user.email.length>0 && user.password.length>0){
        setButtonDisabled(false);
      } else{
        setButtonDisabled(true);
      }
    },[user])


    
    return(
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">{loading?"Processing":"Login"}</h1>
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
       

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">email</label>
            <input type="text" id="email" name="name" value={user.email} 
            
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
             
            onChange={(e)=>setUser({...user, email: e.target.value})}

            placeholder="Email"
            />
          </div>
        </div>


        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">password</label>
            <input type="text" id="password" name="name" value={user.password} 
            
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
             
            onChange={(e)=>setUser({...user, password: e.target.value})}

            placeholder="Password"
            />
          </div>
        </div>
       
        <div className="p-2 w-full">
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          
          onClick={onLogin}
          > Login </button>

        

        </div>
        <Link href="/signup" className="m-auto">Go to Signup</Link>
       
      </div>
    </div>
  </div>
</section>
    )
}