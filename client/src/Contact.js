import React, { useState } from 'react'
import './styles/Contact.css';
import axios from 'axios';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const [showText, setShowText] = useState(false);
    const [status, setStatus] = useState('notSent');

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        const { name, phone, email, message } = data;
        e.preventDefault();
        if (name.length > 0 && phone.length > 0 & email.length > 0 && message.length > 0) {
            const form = Array.from(document.querySelector('#inputs').children)

            setShowText(false);
            for (let item of form) {
                item.classList.remove('missing');
            }
            await axios.post('./contact', data)
                .then(setStatus('sending'))
                .then(res => {
                    if (res.data === 'success') {
                        setStatus('sent')
                    } else {
                        setStatus('failed')
                        alert('Error sending message.')
                    }
                })
        } else {
            const form = Array.from(document.querySelector('#inputs').children)
            for (let item of form) {
                if (item.value === '') {
                    item.classList.add('missing')
                    setShowText(true);
                } else {
                    item.classList.remove('missing')
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex col ai-c">
            <p className={showText ? 'missing-text show-text' : 'missing-text'}>Please fill out missing information</p>
            <div id="inputs">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={data.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={data.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                ></textarea>
            </div>
            {status === 'sending' ? <h2>Sending...</h2> : status === 'sent' ? <h2>Message sent!</h2> : <button>Send</button>}
        </form>
    )
}

export default Contact;