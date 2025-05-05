import React from 'react';
import { Link } from 'react-router-dom';
import Survey from '../components/Survey';

class Evaluation extends React.Component {
    render() {
        return (
            <main>
            <div>
                <Survey />
            </div>
            </main>
        );
    }
}

export default Evaluation;