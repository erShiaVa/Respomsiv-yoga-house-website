import React from 'react';
import './instagram.scss';

function Instagram() {
  return (
    <section className="instagram">
      <div className="container__insta">
        <div className="instagram__content">
          <h3 className="heading-three">yogahouse on Spotify Spotlight</h3>
          <p className="subtitle">Exploring the Unseen: <br/>Where Every Episode is a Fresh Journey</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates incidunt natus atque quibusdam, adipisci autem 
            mollitia assumenda aperiam dolore ex quos quisquam, 
            enim distinctio cupiditate laborum consequatur quasi 
            placeat tempora aliquid, culpa tempore deserunt eaque!
          </p>
          <div className="instagram__cta">
            <button className="button-primary">go to soptify</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram