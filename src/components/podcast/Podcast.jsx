import React from 'react';
import './podcast.scss';
import { assets } from '../../assets';

function Podcast() {
  return (
      <section className="podcast__container">
            <div className="podcast__card">
                <img className='podcast__img' src={assets.podcast_one} alt="/" />
                <div className="podcast__body">
                    <p className='podcast__title'>Meditation</p>
                    <p className='podcast__description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti harum nobis tempora molestias rem, totam ipsum 
                        voluptate vitae quae facere.
                    </p>
                </div>
            </div>
            <div className="podcast__card">
                <img className='podcast__img' src={assets.podcast_two} alt="/" />
                <div className="podcast__body">
                    <p className='podcast__title'>Self-Care</p>
                    <p className='podcast__description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti harum nobis tempora molestias rem, totam ipsum 
                        voluptate vitae quae facere.
                    </p>
                </div>
            </div>
            <div className="podcast__card">
                <img className='podcast__img' src={assets.podcast_three} alt="/" />
                <div className="podcast__body">
                    <p className='podcast__title'>Inner heahling</p>
                    <p className='podcast__description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Deleniti harum nobis tempora molestias rem, totam ipsum 
                        voluptate vitae quae facere.
                    </p>
                </div>
            </div>
    </section>   
  )
}

export default Podcast