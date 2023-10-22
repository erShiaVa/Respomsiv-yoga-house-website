import React from 'react';
import Marquee from 'react-fast-marquee';
import './breathe.scss';

function Breathe() {
  const text = "the ultimate relaxation adventure in Bali";
  const textOne = "Be a part of our community";
  const textTwo = "Book your next timeout in the tropical oasis";
  const textThree = "Get a discount of 50% on our exclusive Bali retreat";
  const textFour = "yogahousebali50";
  return (
    <section className='marquee'>
      <Marquee 
        gradient={false} 
        speed={60} 
      >
        <p style={{
            fontFamily: 'Tenor Sans', 
            fontSize: '1rem', 
            color: '#FBFBFC', 
            textTransform: 'uppercase',
            paddingRight: '3.65rem',
            paddingLeft: '3.65rem',
            letterSpacing: '1.5px'
          }}>
          {text}
        </p>
        <p style={{
            fontFamily: 'Tenor Sans', 
            fontSize: '1rem', 
            color: '#FBFBFC', 
            textTransform: 'uppercase',
            paddingRight: '3.65rem',
            paddingLeft: '3.65rem',
            letterSpacing: '1.5px'
          }}>
          {textOne}
        </p>
        <p style={{
            fontFamily: 'Tenor Sans', 
            fontSize: '1rem', 
            color: '#FBFBFC', 
            textTransform: 'uppercase',
            paddingRight: '3.65rem',
            paddingLeft: '3.65rem',
            letterSpacing: '1.5px'
          }}>
          {textTwo}
        </p>
        <p style={{
            fontFamily: 'Tenor Sans', 
            fontSize: '1rem', 
            color: '#FBFBFC', 
            textTransform: 'uppercase',
            paddingRight: '3.65rem',
            paddingLeft: '3.65rem',
            letterSpacing: '1.5px'
          }}>
          {textThree}
        </p>
        <p style={{
            fontFamily: 'Tenor Sans', 
            fontSize: '1rem', 
            color: '#FBFBFC', 
            textTransform: 'uppercase',
            paddingRight: '3.65rem',
            paddingLeft: '3.65rem',
            letterSpacing: '1.5px'
          }}>
          {textFour}
        </p>
      </Marquee>
    </section>
  );
}

export default Breathe;
