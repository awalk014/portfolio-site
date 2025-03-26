import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <main>
            <div class="left_side">
                <h1>Who Am I?</h1>
                <p>My name is Benjamin Abram Walker. You can call me Abram.</p>
                <p>I am a software development student graduating from Wayne Community College in May of 2025.
                    My career has been in the field of industrial maintenance and manufacturing. I have also served
                    in the United States Air Force Reserves as an aircraft mechanic for six years. I am a father 
                    to two boys and a husband to a wonderful wife.
                </p>
                <h2>My Personal Philosophy</h2>
                <p>
                    Software development is a journey that has been similar to learning mechaincs. I see every system
                    as being able to be broken down into its smallest components in order to be maintained and improved.
                    I feel the same satisfaction writing code as I used to feel when I would replace valves and pumps
                    on aircraft during my military career.
                </p>
                <h2>My Professional Goals</h2>
                <p>
                    My main aspiration is to one day work on backend systems in the software development field. I have
                    always derived much satisfaction from working on systems that are not visible to the end user.
                    There is a special pride in being a key player in the unseen systems that make the world go round.
                </p>
                <h3><Link to="#">Resume</Link></h3>
                <h3><Link to="#">LinkedIn Profile</Link></h3>
            </div>
            <div class="right_side">
                <img src="https://placehold.co/400x600" alt="Picture of Me" />
            </div>
        </main>
        );
    }
}

export default About;