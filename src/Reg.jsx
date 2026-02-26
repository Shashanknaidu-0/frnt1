import { useState } from "react"
import axios from "axios"

function Reg()
{
  const [data,setData]=useState(
    {
      username:"",
      email:"",
      password:""
    }
  )

  const changeName = (e)=>
  {
    setData({...data,[e.target.name]:e.target.value})
  }
   const submit = async ()=>
  {
    try
    {
        //const res=await axios.post("http://localhost:8080/register",data)
        const res = await axios.post(
            "https://cabsystems-1.onrender.com/register",
            data
        )
           alert(res.data)

    }
    catch(xyz)
    {
        alert(xyz.response?.data || "Error")
    }
  }
return(
    <>
       <h1> i am App</h1>
       <input onChange={changeName} name="username" placeholder="enter username"/>
       <input onChange={changeName} name="email" placeholder="enter email"/>
       <input onChange={changeName} name="password" placeholder="enter password"/>
       <button onClick={submit}>register</button>
    </>
   ) 
}
export default Reg 
