import React from 'react';
import './contactform.scss';

function ContactForm() {
  return (
    <section className="contact__container">
        <div className="contact__heading">
            <h2 className="heading-two">get in touch</h2>
            <p className="paragraph">
                If you have any questions or concerns, please do not 
                hesitate to contact us.<br/>Our team will take care of 
                you as soon as possible.
            </p>
        </div>
        <div className="contact__form">
            <div className="input-group">
                <input type='text' id='email' className='input-group__input' required/>
                <label htmlFor="name" className='input-group__label'>Your full name</label>
            </div>
            <div className="input-group">
                <input type='text' id='email' className='input-group__input' required/>
                <label htmlFor="email" className='input-group__label'>Your email address</label>
            </div>
            <div className="input-group">
                <textarea type='text' id='message' className='input-group__input message' required/>
                <label htmlFor="message" className='input-group__label'>Your message</label>
            </div>
        </div>
        <div className="contact__btn">
           <button className="button-primary">send message</button> 
        </div>
  </section>  
  )
}

export default ContactForm