import React, { Component } from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact-box'>
            <div className='contact-inputs'>
            <input className='sm-input' placeholder='name' type='text'></input>
            <input className='sm-input' placeholder='email' type='email'></input>
            <input className='lg-input' placeholder='message' type='text'></input>
            <div className='submit-info'>SEND</div>
            </div>
            <div className='contact-methods'>
                <p>tel: 801-123-1234</p>
                <p>email: email@email.com</p>
                <p>Salt Lake City, UT</p>
            </div>
        </div>
    )
}

export default Contact;