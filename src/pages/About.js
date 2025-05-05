import React from 'react';
import { Link } from 'react-router-dom';
import portraitImage from '../images/portrait.png';


class About extends React.Component {
    render() {
        return (
            <main>
                <div className="aboutme">
                    <div className="left_side">
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
                        <h3 className='clickable-link'><Link to="#">Resume</Link></h3>
                        <h3 className='clickable-link'><Link to="#">LinkedIn Profile</Link></h3>
                    </div>
                    <div className="right_side">
                        <img src={portraitImage} alt="Smiling handsome software developer" />
                    </div>
                </div>
                <div className='reflection'>
                    <h1>Reflection</h1>
                    <p>Upon completion of this website, I have new found appreciation of the role a front end or full stack developer.
                        I have learned that the front end is not just a pretty face, but a complex system of components that work together to create a seamless user experience.
                        There are many tools and libraries that can be used to create a website, and it is important to choose the right ones for the job.
                        I have also learned that the front end is not just about the code, but also about the design and user experience.
                        I have learned that a good front end developer must be able to think like a user and understand their needs and desires.
                    </p>
                </div>
            </main>
        );
    }
}

export default About;