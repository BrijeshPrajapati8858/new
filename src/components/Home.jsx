import React, { useState } from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.png';
import Button from '../components/Button';



const Home = () => {
    const [value, setValue]=useState('$5000 - $10000');
    const [date, setDate]=useState();
    

    
  return (
    <Section>
        <div className="background">
            <img src={hero} alt="hero" />
        </div>
        <div className='content'>
            <div className='info'>
                <h1>It's Time To</h1>
                <h1>Explore the World</h1>
                <Button text="Plan Your Trip" />
               
            </div>
            <div className='planner'>
                <form action="">
                    <div className='row'>
                        <label htmlFor="destination">Destination</label>
                        <select>
                            <option value="">Arab Egypt</option>
                            <option>Gorakhpur, India</option>
                            <option> Agra, India</option>
                            <option> Delhi, India</option>
                            <option> Kashmir, India</option>
                            <option> Jammu, India</option>
                            <option> Laddhak, India</option>
                            <option> jaipur, India</option>
                            <option> Ahmedabad, India</option>
                            <option> Goa, India</option>
                               <option>Kyoto, Japan</option> 
                               <option>Tokyo, Japan</option> 
                               <option> Osaka, Japan</option>
                               <option> Hiroshima, Japan</option>
                               <option>Nara, Japan</option> 
                              <option>  Fukuoka, Japan</option>
                               <option> Mount Fuji, Japan</option>
                               <option> Izu Peninsula, Japan</option>
                            
                        </select>
                          
                    </div>
                    <div className="row">
                        <label htmlFor="">Check In</label>
                        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                    <div className="row">
                        <label htmlFor="">Price Range</label>
                        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
                    </div>
                    <div className='row'>
               
                        <Button text="Discover More"/>

                    </div>
                </form>

            </div>

        </div>
    </Section>
  )
}

const Section  = styled.section`
margin-top: 2rem; 
position: relative;
.background{
    img{
    height: 90vh;
    width: 100%;

}
}
.content{
    .info{
        
        position: absolute;
        top: 5rem;
        margin-left: 8rem;
        h1{
            font-size:5rem;
            margin-button:2rem;

        }
    }
    .planner{
        position: absolute;
        bottom: -2rem;
        right:0;
        background-color: #fff;
        padding: 2rem;
        -webkit-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
    }

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        
        .row{
            display: flex;
            flex-direction: column; 
            text-align:start;
            
            
            label{
                font-size:.7rem;
                color:var(--secondary-text);
            }
            input, select{
                border:none;
                width:100%;
                color:var(--primary-text);
                margin-top:.5rem;
                background-color:white;
                font-size:1.1rem;
                border-bottom: 1px solid #f5ebe9;
                padding-bottom: 0 .3rem;
            }
            input:focus{
                outline:none;

            }
            input[type="date"]::webkit-calendar-indicator{
                cursor:pointer;
                filter:invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg) brightness(105%) contrast(101%)

            }
        }
    }
}
`;

export default Home