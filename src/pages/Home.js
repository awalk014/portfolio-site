import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const showError = location.state?.error;

    return (
        <main className='main_home'>
            {showError && (
                <p className='error_message'>
                    Their was an error loding the requested page. You have been redirected to the home page. <br />
                    Could you please describe this event in the site evaluation? Thank you.
                </p>
            )}
            <h1>Welcome</h1>
            <p>This is the landing page for my educational portfolio.</p>
            <p>Use the links above to navigate the site.</p>
            <p>Please enjoy your stay.</p>

            <h2>About this site</h2>
            <p>This site is constructed using React.js and is deployed live on Vercel.</p>
            <p>Feel free to inspect the source with your browser!</p>
            <p>Notice that the inner workings are not the same as a static HTML site.</p>
        </main>
    );
}

export default Home;