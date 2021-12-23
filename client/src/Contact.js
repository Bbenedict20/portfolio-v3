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
    const [status, setStatus] = useState('notSent');

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async e => {
        e.preventDefault();
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
    }
    return (
        <form onSubmit={handleSubmit} className="flex col ai-c">
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
            {status === 'sending' ? <h2>Sending...</h2> : status === 'sent' ? <h2>Message sent!</h2> : <button>Send</button>}
        </form>
    )
}

export default Contact;