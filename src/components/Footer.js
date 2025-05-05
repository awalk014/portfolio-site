import React from "react";

// Convert to functional component for easier access to process.env
function Footer() {
    // Read environment variables injected during build
    // Use slice(0, 7) to get the short SHA. Provide a fallback if not set.
    const version = process.env.REACT_APP_GIT_SHA
        ? `v${process.env.REACT_APP_GIT_SHA.slice(0, 7)}`
        : 'vDev'; // Fallback for local development if var isn't set

    // Read the build date environment variable. Provide a fallback.
    const buildDate = process.env.REACT_APP_BUILD_DATE
        ? new Date(process.env.REACT_APP_BUILD_DATE).toLocaleDateString() // Format the date nicely
        : 'Local Build'; // Fallback for local development

    return (
        <footer>
            <p>Author: Benjamin Abram Walker | Version: {version} | Last Updated: {buildDate}</p>
        </footer>
    );
}

export default Footer;