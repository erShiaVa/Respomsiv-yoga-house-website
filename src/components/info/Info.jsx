import React from 'react';
import './info.scss';
// import { assets } from '../../assets';

function Info() {
  return (
    <section className="info">
      <div className="container">
          <div className="info__content">
            <h2 className="heading-two">what you need to know about <br/> our courses</h2>
            <p className="subtitle">
            All courses begin with breathing exercises and end with a wonderful meditation
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="info__cta">
              <button className="button-primary">book now</button>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Info