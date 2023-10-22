import React from 'react';
import './namaste.scss';

function Namaste() {
  return (
    <section className="container namaste">
        <div className="namaste__content">
          <h2 className="heading-two">namaste yoginis</h2>
          <p className="subtitle">
            Let us tell you about our yoga philosophy
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
          </p>
          <div className="namaste__cta">
            <button className="button-primary">Retreat plans</button>
            <button className="button-secondary">get in touch</button>
          </div>
        </div>
    </section>
  )
}

export default Namaste