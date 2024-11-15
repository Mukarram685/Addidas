import React from "react"
import { useState } from "react"

export default function Randompassgen() {
    const[password , setpassword] = useState("");

    const handle = ()=>{
     let b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let c = "0123456789";
     let d = "!@#$%^&*()";
     let e = b+c+d;
     let  generatedpassword = "";
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * e.length);
        generatedpassword += e[randomIndex];
    }
    let g = generatedpassword;
        setpassword(g);
     
    }
  return (
    <div>
<p> Password :{password}</p>
<button onClick={handle} >click</button>
    </div>
  )
}
