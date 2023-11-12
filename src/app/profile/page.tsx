"use client"
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ProfilePage(){

    const router = useRouter();
    const [data, setData] = useState("nothing")

    const logout= async ()=>{
        try{
           await axios.get('/api/users/logout')
           toast.success('Logout successful')
           router.push("/login")
     


        } catch(error:any){
            console.log(error.message);
            toast.error(error.message)

        }
    }

    const getUserDetails = async ()=>{
        const res = await axios.get("/api/users/me")
        console.log(res.data);
        setData(res.data.data._id)
    }



    return(
        <div>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2>{data==='nothing'?"Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>

            <hr />
            <button
            onClick={logout}
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Logout</button>

            <br />
            <button
            onClick={getUserDetails}
            className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Get user Details</button>
        </div>

    )
} 