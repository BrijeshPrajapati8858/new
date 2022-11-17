import React from 'react';
import styled from "styled-components";
import logo2 from "../assets/logo2.png";
import {BsPerson} from 'react-icons/bs';
import{IoSearchOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
     .brand{
        img{
            width:100px;
            height:40px;
            cursor:pointer;

        }
     }
     .toogle{
        display:none;

     }
     .links{
            ul{
                display:flex;
                gap:3rem;
                list-style-type:none;

             
            li{
                a{
                    text-decoration:none;
                    color:black;
                    cursor:pointer;
                    transtition: var(--default-transtition);
                    &:hover{
                        color:var(--primary-color);
                    }
                }
              }
            }
    }
    .account-info{
       display: flex;
       gap: 2rem;
       .account{
        display: flex;
        gap: .5rem;
        cursor: pointer;
       } 
       .search{
        cursor:pointer;
       }
       
      
    }
`;
const Navbar = () => {
  return (
    <Nav>
        <div className='brand' >
            <Link to='./'>
            <img src={logo2}  alt="logo" />        
            </Link>
          

        </div>
        <div className='toogle' />
        <div className="links">
            <ul>
                <li>
                    <Link to='/Service'> 
                    Service
                    </Link>
                </li>
                <li>
                <Link to='/Destination'>  
                   Destination
                    </Link>
                </li>
                <li>
                <Link to='/Offer'> 
                  Offer
                    </Link>
                </li>
                <li>
                <Link to='/Tours'> 
                  Tour
                    </Link>
                </li>
                <li>
                <Link to='/Blog'> 
                 Blog
                    </Link>
                </li>
                
            </ul>
        </div>
        <div className='account-info'>
            <div className='account'>
                <span>
                    <BsPerson />

                </span>
                <Link to='/SignIn' style={{paddingLeft: 13, textDecoration: 'none'}}>  <li className='account'>My Account</li></Link>
              
            </div>
            <div className='search'>
                <IoSearchOutline />

            </div>

        </div>
       
    </Nav>
  )
}

export default Navbar