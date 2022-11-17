import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '.././assets/signup.png';
import styled from "styled-components";
import Button  from "./Button";





const Registration = () => {

  const [ShowId, setShowId] = useState(false);



  return (
   <Section className='signup'>
    <div>
      <img src={signup} alt="" />
    </div>
   
      <form>
          <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <label ><b>Name</b></label>
          <input type="text" placeholder="Enter Your Name" name="name" id="name" required />

          <label><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" id="email" required />

          <label ><b>Mobile No.</b></label>
          <input type="tel" placeholder="Enter Mobile Number" name="tel" id="tel" required />

          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label ><b>Confirm Password</b></label>
          <input type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" required />
          <div className='checkbox'>  <input type="checkbox" id="user" name="user" onClick={()=>setShowId(!ShowId)} />
               <label> Are You Organizer?</label></div>
               {
                ShowId?<div id="organizer">
                <label ><b>Organizer ID</b></label>
                <input type="string" placeholder="Enter Your Organizser ID" name="organizer_id" id="organizer_id" required /></div>:null
               }

              
        

          <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>

          <Button  text='Sign up'/>
        </div>
        
        <div className="container signin">
          <p>Already have an account? 
             <Link  to = '/SignIn'> Sign In</Link>
             </p>

        </div>
      </form>
  

   </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;
display: flex;
gap: 5.5rem;
img{
  width: 100%;  height: 100%; 
}


.container{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  

  h1{
    font-size: 2.5rem;
    color: var(--primary-color);
  }
  p{
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
  label{
    margin-top: 1.5rem;
  }
  input{
    padding: 20px;
    font-size:1.4rem;
    width: 100%;
    height: 3rem;
  }
  Button{
    margin: 1.5rem 0;
    width: 100%;
  }
  .checkbox{
    width: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem 0 0 0 ;
    label{
      width: 100%;
      height: 100%;
      margin-top: auto;
    }
    input{
      height: 10%;
      width: 10%;
      margin-top: auto;
      align-content: center;
    }
    

  }
  #organizer{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
  
  
   }
}
`;


export default Registration;