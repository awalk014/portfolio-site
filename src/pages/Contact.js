import React from 'react';
import ContactForm from '../components/ContactForm'; 
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <ContactForm />
            </div>
        );
    }
}

export default Contact;