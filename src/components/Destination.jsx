import React from 'react';
import styled from 'styled-components';
import cuba from '../assets/cuba.png';
import paris from '../assets/paris.png';
import japan from '../assets/japan.png';
import Button from '../components/Button';

const Destination = () => {
    const data = [
        {
        name: "Cuba City",
        image: cuba,
    },
    {
        name: "Paris",
        image: paris,
    },
    {
        name: "Japan",
        image: japan,
    }
]
  return (
    <Section className='destination'> 
          <div className='info' >
            <h2>
                Top <span>Destination</span> In the World 
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis impedit dignissimos deleniti magnam praesentium quaerat laboriosam nostrum ducimus in.</p>
            <Button text="Discover More"/>
          </div>
          <div className='destinations'>
                {
                    data.map(({name,image })=>{
                      return (
                      <div className='destination' key={name}>  
                      <div className="image">
                        <img src={image} alt="Destination" />
                      </div>
                      <div className='name'>
                        <h3>{name}</h3>

                        </div> 
                      </div>
                      )
                  })
                
                }
          </div>
    </Section>
  
  )
}
const Section = styled.section ` 
margin-top:8rem;
display: flex;
gap: 5rem;


.info{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4rem;
   h2{
    font-size: 4rem;
    line-height: 3rem;
   }
   span{
    color: var(--primary-color);

   }
   p{
    color: var(--secondary-color);
   }
}
.destinations{
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .destination{
        position: relative;
        img{
           height:20rem;
        }
        .name{
            position: absolute;
            bottom: 0;
            height: 100%;
            width:100%;
            backgroind: linear-gradient(to bottom , #fffff24, 0000aa)
            display:flex;
            flex-direction: column-reverse;

        }
        h3{
            margin-left: 1rem;
            font-size:1.5rem;
            color:white;

        }
    }
}

}

`;


export default Destination;