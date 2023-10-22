import React from 'react';
import './footer.scss';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';


function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
        
            <div className="footer__box">
                <p className="footer__heading">Privacy</p>
                <p className="footer__text">Lorem ipsum</p>
                <p className="footer__text">Lat vero eos</p>
                <p className="footer__text">Stet clita kasd</p>
                <p className="footer__text">Magna aliqu</p>
            </div>

            <div className="footer__box">
                <p className="footer__heading">Legal</p>
                <p className="footer__text">Magna aliqu</p>
                <p className="footer__text">Stet clita kasd</p>
                <p className="footer__text">Lorem ipsum</p>
                <p className="footer__text">Lat vero</p>
            </div>

            <div className="footer__box">
                <p className="footer__heading">About</p>
                <p className="footer__text">FAQ</p>
                <p className="footer__text">Bookings</p>
                <p className="footer__text">Retreat</p>
                <p className="footer__text">Imprint</p>
            </div>

            <div className="footer__box">
                <div className="nav__logo">
                    <a href="/">YOGA.H<span>OUSE</span></a>
                </div>
                <div className="social__icons">
                    <i><AiOutlineInstagram size={20}/></i>
                    <i><ImPinterest2 size={20}/></i>
                    <i><AiOutlineYoutube size={20}/></i>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer