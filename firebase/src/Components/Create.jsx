import { useState } from "react"
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Create = () => {
    const [email,setEmail] =  useState('');
    const [password,setPassword] = useState('');

    const createAccount = (e)=>{
       e.preventDefault();
       createUserWithEmailAndPassword(auth,email,password)
       .then((userCredentials)=>{
        console.log(userCredentials);
        
       })
    }
  return (
    <div>
      <form action="" onSubmit={createAccount}>
        <h1>
            Create a new account
        </h1>
        <input type="Email" value={email} placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" value={password}placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create
