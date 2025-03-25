import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_r03s0h9', 'template_t9l5b5c', form.current, {
          publicKey: '06bbSsHdFDLVS0ivS',
        })
        e.target.reset()
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title" >Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                  <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">im.ashar96@gmail.com</span>
                        <a href="mailto:im.ashar96@gmail.com.com" className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">XXXXX - XX546</span>
                        <a href="https://api.whatsapp.com/send?phone=9874209546&text=Hello, more information!" className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">fb.com</span>
                        <a href="https://m.me/atib.ashar.7" className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                  </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder="Insert your name"/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">E-mail</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Insert your e-mail"/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" id="" rows="10" cols="30" className="contact__form-input" placeholder="Write your project"></textarea>
                    </div>

                    <button className="button button--flex">Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" class= "button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2.33045 8.38999C0.250452 11.82 9.42048 14.9 9.42048 14.9C9.42048 14.9 12.5005 24.07 15.9305 21.99C19.5705 19.77 23.9305 6.13 21.0505 3.27C18.1705 0.409998 4.55045 4.74999 2.33045 8.38999Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill = "var(--conatiner-color)"/>
                        <path d="M15.1999 9.12L9.41992 14.9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill = "var(--conatiner-color)"/>
                    </svg>
                    </button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact