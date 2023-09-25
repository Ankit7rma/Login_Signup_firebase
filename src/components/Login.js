import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {getDocs,collection,where,query} from "firebase/firestore";
import { db } from '../utils/firebase';

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const login = async()=>{
     
      const dbref = collection(db,"Auth")
     try{
      const emailMatch = query(dbref,where("Email","==",email))
      const passWordMatch = query(dbref,where("Password","==",password))
      const emailSnapshot = await getDocs(emailMatch)
      const emailArray = emailSnapshot.docs.map((doc)=>doc.data())
      const passwordSnapshot = await getDocs(passWordMatch)
      const passwordArray =passwordSnapshot.docs.map((doc)=>doc.data())

      if(emailArray.length>0 && passwordArray.length>0){
         alert(
          "Login Successful"
         )
      }else{
        alert("Check Email ,Password or Create Account")

      }
     }
     catch(error){
      alert(error)
     }
    }
  return (
    <div>
    <div className="container">
        <div className="form">
          <h2>Sign In</h2>
          <div className="box">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="box">
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <p className="p">
            New User <Link to="/">Sign Up</Link>
          </p>
          <button onClick={login}>Login</button>
        </div>
      </div></div>
  )
}

export default Login