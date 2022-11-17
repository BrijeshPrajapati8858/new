import React from 'react';
import styled from 'styled-components';
import tour1 from '../assets/tour1.png';
import tour2 from '../assets/tour2.png';
import tour3 from '../assets/tour3.png';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import ellipse from '../assets/ellipse.png';
import {BsFillStarFill} from "react-icons/bs";


const Tours = () => {
  const data = [
    {
      image:tour1,
      title:'Santorini, Oia Greece',
      price: '$2000',
      reviews:'5K Reviews',
    },
    {
      image:tour2,
      title: 'Lighthouse, Bellwood',
      price: '$4000',
      reviews:'15K Reviews',
    },
    {
      image:tour3,
      title: 'Riverfront, japan',
      price: '$10000',
      reviews:'35K Reviews',
    },

  ]
  return (
   <Section id='tour'>
    <h2>Choose Your Destination</h2>
    <img src={ellipse} alt="ellipse" className="ellipse" />
    <div className='tours'>
        {
          data.map(({image, title, price, reviews}, index)=>{
            return(
              <div className='tour' key={title}>
                <div className='image'>
                  <img src={image} alt="tour" />
                  {
                    index === 1 && (
                      <div className='vectors'>
                        <img src={vector1} alt="vector1" className='vector1' />
                        <img src={vector2} alt="vector2" className='vector2' />
                        </div>
                    )
                  }
                </div>
                <div  className="info">
                  <div className="details">
                    <h4>{title}</h4>
                    <div className="price-details">
                      <span className="price">{price}</span>
                      <div className="reviews">
                        <div className="stars">
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                        </div>
                        <span className="review">{reviews}</span>
                      </div>
                    </div>
                  </div>
                  <button>+</button>

                  </div>
              </div>
            )
          })
        }
    </div>

   </Section>
  )
}

const Section = styled.section`
margin-top:15rem;
margin-bottom:5rem;
position:relative;
.ellipse{
  position:absolute;
  right:-5rem;
  top:-20rem;
  height:30rem;
  z-index: -1;


}
h2{
  text-align:center;
  align-items:center;
  transform:translateY(-150px);
  font-size: 3rem;
  margin-bottom: 5rem;

}
.tours{
  display:flex;
  gap:1rem;
  justify-content:center;
  .tour{
    position: relative;
    &:nth-of-type(2){
      transform:translateY(-150px);
      -webkit-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
        box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
    }
   &:nth-of-type(odd):hover{
      -webkit-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
        box-shadow: 3px 10px 24px -3px rgba(0,0,0,0.75);
        transform: scale(1.01);
    }
    .image{
      img{
        height: 25rem;

      }
      .vectors{
        .vector1{
          position: absolute;
          height: 8rem;
          top: 0;
          left: -9rem;
        }
        .vector2{
          position: absolute;
          height: 8rem;
          top: 0;
          right: -8rem;
        }
     
      }
    }
    .info{
      position: absolute;
      bottom: -30px;
      right: 0;
      background-color: white;
      display:flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      box-shadow: rgba(100, 100,111,0.2);

    }
    button{
      padding: 0.5rem .7rem;
      background-color: var(--primary-color);
      border:none;
      font-size:1.1rem;
      color: white;
      cursor:pointer;
    }
    .details{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      .price-details{
        display: flex;
        gap: 1rem;

        .price{
          color: var(--primary-color);
          font-weight: bolder;

        }
        .reviews{
          display: flex;
          gap: .5rem;
          .stars{
            svg{
              color: #ffc01e;
            }
          }
        .review{
          color: var(--secondary-text);
        }
        }
      }

    }
  }
}
`;


export default Tours;