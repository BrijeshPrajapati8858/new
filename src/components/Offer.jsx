import React from 'react';
import styled from 'styled-components';
import lighthouse from '../assets/lighthouse.png';
import { BiWorld} from 'react-icons/bi';
import { BsHeadphones, BsPerson } from 'react-icons/bs';

const Offer = () => {
  const data = [
    {
        text:"Best Travel Guide Always For Your Service ",
        icon: <BsPerson />,
        color: 'red',
  },
  {
    text:"World class service provide to you.",
    icon: <BiWorld />,
    color: 'green',
},
{
  text:"24/7 Strong Customer Support",
  icon: <BsHeadphones />,
  color: 'yellow',
},
]
  return (
    <Section id='offer'>
      <div className='image'>
        <img src={lighthouse} alt="lighthouse" />

      </div>
      <div className="content">
        <div className="title">
          <h1>We are Offering in Total 793 tours Across the World</h1>
        </div>
        <ul className='list'>
          {
            data.map(({text, icon, color})=>{
              return(
                <li key={text}>
                  <div className={`icon ${color}`}>{icon}</div>
                  <div className='text'>
                      <h3>{text}</h3>
                  </div>

                </li>
              )
            })
          }

        </ul>
       </div>
    </Section>
  )
}

const Section = styled.section`
margin: 8rem 0;
display: flex;
gap:5rem;
.image{
  img{
    height:35rem;
  }
}
.content{
  .title{
    margin:2rem 0;
  
  h1{
    font-size:3rem;
   }
  }
  .list{
    list-style-type:none;

  }
  li{
    display:flex;
    align-items:center;
    gap:4rem;
    margin:4rem 0;
    .icon{
      padding: 0.5rem;
      border-radius:1rem;
      justify-content: center;
      display: flex;
      align-items: center;
      font-size: 2rem;

    }
    .red{
      background-color: #ff3010aa;
      color: white;
    }
    .yellow{
      background-color: #ffc01e55;
      color:  #ffc01e;
    }
    .green{
      background-color: #65ce5455;
      color: #65ce64;
    }
  }
}

`;


export default Offer;