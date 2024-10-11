import { useEffect, useState } from "react"
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = () => {
    const [email,setEmail] =  useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState(null);

    const logIn = (e)=>{
       e.preventDefault();
       signInWithEmailAndPassword(auth,email,password)
       .then((userCredentials)=>{
        console.log(userCredentials);
        const loggedInUser = userCredentials.user;
        setUser(loggedInUser)
        
       }).catch((error)=>{
        console.log(error);
        
       })
    };
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser(null);
            console.log("sign out");
            
        }).catch((error)=>{
            console.log(error);
            
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser(null)
            }
        })
        return ()=> unsubscribe;
    },[])
  return (
    <div>
      <form action="" onSubmit={logIn}>
        <h1>
            Sign in to your account
        </h1>
        <input type="Email" value={email} placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" value={password}placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      {user? (
         <div>
      <h2>Welcome, {user.email}</h2>
      <button onClick={logOut}>Log Out</button>
      </div>
      ):(
        <p>You are not logged in</p>
      )}
    </div>
  )
}

export default Login
