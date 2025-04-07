import React from 'react';
import { Link } from 'react-router-dom';

class Awards extends React.Component {
    render() {
        return (
            <main>
                <h1>Awards and Honors</h1>
                <div>
                    <h2>Military Awards</h2>
                    <ul>
                        <li>Air Force Achievement Medal</li>
                        <li>Air Force Outstanding Unit Award</li>
                        <li>National Defense Service Medal</li>
                        <li>Global War on Terrorism Service Medal</li>
                        <li>Nuclear Deterrence Operations Service Medal</li>
                        <li>Air Force Training Ribbon</li>
                    </ul>
                </div>
            </main>
        );
    }
}

export default Awards;