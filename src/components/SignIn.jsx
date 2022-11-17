import React from 'react';
import signup from '.././assets/signup.png';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button  from "./Button";

const SignIn = () => {
  return (
   <Section className='signup'>
    <div>
      <img src={signup} alt="" />
    </div>
   
      <form>
          <div className="container">
          <h1>Login Now</h1>
          <p>Please fill in this form to Login Your account.</p>

        

          <label ><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" id="email" required />

  

          <label ><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

         

          <Button  text='Sign In'/>
        </div>
        
        <div className="container signin">
          <p>Create an Account to Login?   <Link  to = '/Registration'> Sign Up</Link>. </p>
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
  width: 100%;
  height: 100%;
}

.container{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  h1{
    font-size: 2.5rem;
    color: var(--primary-color);
  }
  p{
    width: 100%;
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
  
}
`;


export default SignIn;