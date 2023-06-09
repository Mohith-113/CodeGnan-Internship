import React,{useState} from 'react'

export default function Home() {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  function save(e){
    setUsername(e.target.value)
  }
  function show(){
    console.log(username,password)
    setUsername("")
    setPassword("")
  }
  return (
    <div>
      <p><input placeholder='Enter Name' value={username} onClick={save} /></p>
      <p><input placeholder='Password' value={password} onClick={(e)=>setPassword(e.target.value)} /></p>
      <button onClick={show}>Submit</button>
    </div>
  )
}
