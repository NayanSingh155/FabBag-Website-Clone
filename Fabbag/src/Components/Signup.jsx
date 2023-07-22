import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import css from "./signup.css";
import { useNavigate } from "react-router-dom";
export const Signup=()=>{

     const navigate=useNavigate();
    const [form,setform]=useState({
      firstName:"",
      lastName:"",
      email:"",
      password:""

    });

    function handleChange(e){
     const {id,value}=e.target;
     setform({
        ...form,
        [id]:value
    })

    }



   async function handleSubmit(e){
   e.preventDefault();
 const data= await fetch("https://cryptic-ocean-94076.herokuapp.com/registeration",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(form)
}).then(d=>d.json());
if(!data.token){
alert("user already exists");
}else{
    alert("Signup Succesful");
    navigate("/login",{replace:true});
}
    } 
    return (<div className="Body">



    <div className="containersignup">
        <p>Create an Account</p>
        <form onSubmit={handleSubmit}>
                <div className="Facebook" >
                    <span className="NM">Sign in with Facebook</span>
                    <span className="Sbl1"><i class="fab fa-facebook-f"></i></span> 
                </div>
                <div className="Google" >
                    <span className="NM">Sign in with Google </span>
                    <span className="Sbl2"><i class="fab fa-google"></i></span> 
                </div>
                <div className="NMBlock">
                    <div>First Name</div>
                    <div>*</div>
                </div>
                <input  onChange={handleChange} id="firstName" className="Userfirst" type="text" placeholder="Enter first Name"/>
                <div className="NMBlock">
                    <div>Last Name</div>
                    <div>*</div>
                </div>
                <input onChange={handleChange} id="lastName" className="userLast" type="text" placeholder="Last Name"/>
                <div className="NMBlock">
                    <div>Your Email Address</div>
                    <div>*</div>
                </div>
                <input onChange={handleChange} id="email" className="userEmail" type="email" placeholder="Enter Email"/>
                <div className="NMBlock">
                    <div>Your Password</div>
                    <div>*</div>
                </div>
                <input className="UserPassword" id="password" onChange={handleChange} type="password" placeholder="Password"/>
                <div className="SU" >
                    <input  className="submitsignup" type="submit" value="Create an Account"/>
                </div>
                </form>
                <div className="SI" >
                    <button  onClick={()=>{
                        navigate("/login",{replace:true})
                    }} style={{textDecoration:"none",marginBottom:"50px",height:"60px",cursor:"pointer",borderRadius:"0px",letterSpacing:"1px"}} className="submitsignin" >
                        SignIn</button>
                </div>
      
    </div>




    </div>)
}