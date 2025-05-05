import React from 'react';
import { Link } from 'react-router-dom';

class Awards extends React.Component {
    render() {
        return (
            <main>
                <h1>Awards and Honors</h1>
                <div className='left_side'>
                    <h2>Military Awards</h2>
                    <ul>
                        <li>Air Force Achievement Medal</li>
                        <li>Air Force Outstanding Unit Award</li>
                        <li>National Defense Service Medal</li>
                        <li>Global War on Terrorism Service Medal</li>
                        <li>Nuclear Deterrence Operations Service Medal</li>
                        <li>Air Force Training Ribbon</li>
                    </ul>
                    <h2>Academic Honors</h2>
                    <ul>
                        <li>Member of NCSU Scholars Program</li>
                        <li>Greene Central High School Class of 2014 Salutatorian</li>
                        <li>2014 NC State Park Scholarship Finalist</li>
                    </ul>
                </div>
                <div className="right_side">
                <img src="/images/airforcemedal.jpg" alt="Air Force Achievement Medal" />
            </div>
            </main>
        );
    }
}

export default Awards;