import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase.js";
import {getDocs,addDoc,collection,where,query} from "firebase/firestore";

const Signup = () => {
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const dbref = collection(db,"Auth")

    const signup = async()=>{
        const matchEmail = query(dbref,where('Email',"==",email))
        try{
            const snapshot = await getDocs(matchEmail)
            const emailMatchingArray = snapshot.docs.map((doc)=>doc.data())
            if(emailMatchingArray.length>0){
                alert("This Email Already Exists")
            }
            else{
                await addDoc(dbref,{Name: name,Email:email,Password:password})
                alert("Sign up successful") 
            }

        }catch(error){
                alert(error)
        }
    }
  return (
    <div>
      <div className="container">
        <div className="form">
          <h2>Sign Up</h2>
          <div className="box">
            <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="box">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="box">
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <p className="p">
            Already SignedUp <Link to="/login">Sign In</Link>
          </p>
          <button onClick={signup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
