import React,{useState} from 'react';
import axios from 'axios';

export default function Home() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  function save(e){
    setUsername(e.target.value)
  }
  function show(){
    console.log(username,password)
    axios.post("https://localhost:4000/add",{name:username, password:password})
    .then((res)=>{
      console.log(res)
    })
    setUsername("")
    setPassword("")
  }
  return (
    <div>
      <p><input placeholder='Enter Name'  onClick={save} ></input></p>
      <p><input placeholder='Password'  onClick={(e)=>setPassword(e.target.value)} /></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}
