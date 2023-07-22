import css from "./login.css";
import {useDispatch, useSelector} from "react-redux";
import { addEmail } from "../Redux/Email/action";
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { addUserId } from "../Redux/UserId/action";
export const Login=()=>{


  const store=useSelector((store)=>store.email.email);
  const userId=useSelector((store)=>store.userId.userId);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [userID,setUserId]=useState("");
  const [EMail,setEmail]=useState("");
    const [form,setform]=useState({
        email:"",
        password:""
  
      });

      function handleChange(e){
        const {id,value}=e.target;
        setform({
           ...form,
           [id]:value
       })
      if(e.target.id=="email"){
          setEmail(e.target.value);
      }
       }
   
   
   
      async function handleSubmit(e){
      e.preventDefault();
    const data= await fetch("https://cryptic-ocean-94076.herokuapp.com/login",{
       method:"POST",
       headers:{
           "content-type":"application/json"
       },
       body:JSON.stringify(form)
   }).then(d=>d.json());
console.log(data.login._id);

   
   
   if(!data.token){
   alert("Wrong Email or Password");
   }else{
       alert("Login Successful");
       navigate("/",{replace:true});
   }

   dispatch(addEmail(EMail));
   dispatch(addUserId(data.login._id));
       } 


return (<div>
    <div className="Logincontainer">
  <p>Sign In</p>
        <form onSubmit={handleSubmit}>
                <div className="facebook" >
                    <span className="NM">Sign in with Facebook</span>
                    <span className="Sbl1"><i class="fab fa-facebook-f"></i></span> 
                </div>
                <div className="google" id="hower">
                    <span className="NM">Sign in with Google </span>
                    <span className="Sbl2"><i class="fab fa-google"></i></span> 
                </div>
                <div className="NMBlock">
                    <div>Your Email Address</div>
                    <div>*</div>
                </div>
                <input id="email" className="RegisterEmail"  onChange={handleChange} type="email" placeholder="Enter Email" required/>
                <div className="NMBlock">
                    <div>Your Password</div>
                    <div>*</div>
                </div>
                <input className="LoginPassword" onChange={handleChange} id="password" type="password" placeholder="Password" required/>
                <div className="RnF">
                    <div className="R">* Required Fields</div>
                    <div>Forgot your password?</div>
                </div> 
                <div className="SU" >
                    <input className="submitsignin" type="submit" value="Sign in"/>
                </div>
                <hr/>
            </form>
           
            <div className="SI" >
              <Link to="/signup"> <button  className="submitsignup" style={{textDecoration:'none',color:"black"}}> Create an Account</button> </Link>
            </div>
            </div>
</div>)
}