import React from 'react'
import "./Contactus.css"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contactus() {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_s0o7qdc",
          "template_ri6b6hv",
          form.current,
         "3NbI8b1dVLPUPIzGv"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
  <div id='maindiv'>
    <div className='firstdiv'>
        <div className='first-one'>
            <h3>Contact Us</h3>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" id='nameinput'/>
            <input type="email" name="user_email" placeholder="email" id='emailinput'/>
            <textarea placeholder="Your Comment" name="message" rows="4"/>
            <input type="submit" id='subbtn'/>
            </form>
            
        </div>
        <div className='first-two'>
            <h2>We Want To Hear From You And We're Happy To Help!</h2>
            <p>Mail us on Crew@FabBag.com</p>
            <p>Call : 022-6805-6010 <br/>
                 <span>(Monday to Friday : 9 AM - 7 PM)</span>
            </p>
           

            <p>
                <span>Office Address :</span><br/>
                <span>A-004, Boomerang Business Park,</span><br/>
               <span> Chandivali Farm Road, Powai.</span><br/>
                <span>Mumbai - 400072.</span><br/>
               <span> Maharashtra.</span><br/>
                <span>IN.</span><br/>
            </p>
        </div>
    </div>
    <div className='seconddiv'>
        <div>
            <span id='h'>Newsletter</span><br />
            <span>Subscribe now to get daily updates</span>
        </div>
        <div>
        <input type="email" placeholder="your email address" id='subemail'/>
        <input type="submit" value="SUBSCRIBE" id='subbutton'/>
        </div>
    </div>
    </div>
  )
}

export default Contactus


