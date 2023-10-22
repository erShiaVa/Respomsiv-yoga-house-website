import React from 'react';
import './cours.scss';
import { assets } from '../../assets';

function Cours() {
  return (
    <section className="container__cards">
        <div className="cards__box">
            <div className="card">
                <img className='card__image' src={assets.yin_yoga} alt="/" />
                <div className="card__body">
                    <p className='card__title'>yin yoga</p>
                    <p className='card__description'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Autem a adipisci rem. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Voluptatem, ratione. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="card">
                <img className='card__image' src={assets.hatha_yoga} alt="/" />
                <div className="card__body">
                    <p className='card__title'>hatha yoga</p>
                    <p className='card__description'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Autem a adipisci rem. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Voluptatem, ratione. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
        <div className="cards__box">
            <div className="card">
                <img className='card__image' src={assets.vinyasa_flow} alt="/" />
                <div className="card__body">
                    <p className='card__title'>vinyasa flow</p>
                    <p className='card__description'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Autem a adipisci rem. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Voluptatem, ratione. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            <div className="card">
                <img className='card__image' src={assets.inside_flow} alt="/" />
                <div className="card__body">
                    <p className='card__title'>inside flow yoga</p>
                    <p className='card__description'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Autem a adipisci rem. Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Voluptatem, ratione. Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cours