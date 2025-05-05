import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <main>
                <div>
                    <ContactForm />
                </div>
            </main>
        );
    }
}

export default Contact;