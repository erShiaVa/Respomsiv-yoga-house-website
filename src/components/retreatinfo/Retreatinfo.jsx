import React, { useEffect, useState } from 'react';
import './retreatinfo.scss';
import { assets } from '../../assets';

function Retreatinfo() {
  const [currentSlide, setCurrentSlide] = useState(0); // slide index 0
  const slides = [ // array mit objects für die imgs
    { id: 0, src: assets.round_one }, 
    { id: 1, src: assets.round_two }, 
    { id: 2, src: assets.round_three }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1); // wenn aktueller index = 0 zeig rundes img wenn < größer als 0 anderes img
    }, 3000); // timer alle 4sec ausgelöst
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <section className="retreat">
      <div className="retreat__container">
        {currentSlide === 0 ? (
          <img 
            className="retreat__img" src={slides[currentSlide].src} alt="#" />
        ) : (
          <img 
            className="retreat__img" src={slides[currentSlide].src} alt="#" />
        )}
        <div className="retreat__text">
          <h3 className="heading-three">Promote health & harmony</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolores porro voluptates odit dolore ducimus, 
            est temporibus earum eos dicta voluptatibus quaerat distinctio 
            cupiditate quam. Assumenda cum quos saepe architecto autem, 
            impedit iure consequuntur quaerat sunt doloremque blanditiis qui? 
            Voluptas, recusandae repudiandae. Non deleniti doloribus sunt fugit. 
            Sit molestias magnam tenetur.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Dolores porro voluptates odit dolore ducimus, 
            est temporibus earum eos dicta voluptatibus quaerat distinctio 
            cupiditate quam. Assumenda cum quos saepe architecto autem, 
            impedit iure consequuntur quaerat sunt doloremque blanditiis qui.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Retreatinfo