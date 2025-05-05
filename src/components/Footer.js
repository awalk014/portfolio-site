import React from "react";

// Convert to functional component for easier access to process.env
function Footer() {
    // Read the environment variable injected during build
    // Use slice(0, 7) to get the short SHA. Provide a fallback if not set.
    const version = process.env.REACT_APP_GIT_SHA
        ? `v${process.env.REACT_APP_GIT_SHA.slice(0, 7)}`
        : 'vDev'; // Fallback for local development if var isn't set

    return (
        <footer>
            <p>Author: Benjamin Abram Walker | Version: {version}</p>
        </footer>
    );
}

export default Footer;