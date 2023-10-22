import React from 'react';
import './gallery.scss';
import { assets } from '../../assets';

function Gallery() {
  return (
    <section className="gallery__section">
        <div className="gallery__heading">
            <h2 className="heading-two">be a part of our community</h2>
            <p className="subtitle">Where community grows and souls shine</p>
            <button className="button-secondary">@yohagouse</button>
        </div>
        <div className="container">
            <div className="gallery">
                <img src={assets.yoga_house8} alt="/" className='img img-1' />
                <img src={assets.yoga_house7} alt="/" className='img img-2' />
                <img src={assets.yoga_house2} alt="/" className='img img-3' />
                <img src={assets.yoga_house11} alt="/" className='img img-4' />
                <img src={assets.yoga_house10} alt="/" className='img img-5' />
                <img src={assets.yoga_house9} alt="/" className='img img-6' />
                <img src={assets.yoga_house1} alt="/" className='img img-7' />
                <img src={assets.yoga_house5} alt="/" className='img img-8' />
                <img src={assets.yoga_house4} alt="/" className='img img-9' />
                <img src={assets.yoga_house3} alt="/" className='img img-10' />
                <img src={assets.yoga_house12} alt="/" className='img img-11' />
                <img src={assets.yoga_house6} alt="/" className='img img-12' />
            </div>
        </div>
    </section>
  )
}

export default Gallery