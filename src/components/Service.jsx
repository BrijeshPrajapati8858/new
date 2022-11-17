import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

const Service = () => {
    const data = [
        {
        image: service1,
        title: "Choose Destination",
        description : "lorem ipsum dolor sit amet, consectetur adip loerm   production consequ  velit", //
    },
    {
        image: service2,
        title: "Explore the  Place",
        description : "lorem ipsum dolor sit amet, consectetur adip loerm   production consequ  velit", //
    },
    {
        image: service3,
        title: "Start Your Journey",
        description : "lorem ipsum dolor sit amet, consectetur adip loerm   production consequ  velit", //
    },
    {
        image: service4,
        title: "Lets Enjoy",
        description : "lorem ipsum dolor sit amet, consectetur adip loerm   production consequ  velit", //
    },
]
  return (
    <Section id="services">
        <div className='services'>
            {
                data.map(({image, title, description})=>{
                    return(
                        <div className= "service" key={title}> 
                        <img src={image} alt="service"/>
                        <h3>{title} </h3>
                        <p>{description}</p>

                        </div>
                    )
                }
                )
            }

        </div>
    </Section>
  )
}
 
const Section = styled.section` 
 margin:8rem 4rem;
 .services {
    display: grid;
    grid-template-columns:repeat(4, 1fr);
   gap : 1rem;
   .service{
    padding:1.5rem 2rem;
    text-align:center;
    background-color: var(--card-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h3{
        color: var(--primary-text);

    }
    p{
        color: var(--secondary-text);
    }
    img { 
        height:128px;
        width:128px;
    }
    transition: var(--default-transition);
    &:hover{
        background-color:white;
        -webkit-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
    }

   }
 }

`;
export default Service;