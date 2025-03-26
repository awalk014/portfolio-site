import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../images/minimalizm-monitor-kompyuter.jpg";

class Header extends React.Component {
    render() {
        return (
            <header> 
            <div className="image_container">
                <img className="header_image" src={headerImage} alt="Logo" />
                <h2 className="header_quote">One machine can do the work of fifty ordinary men.  
                    No machine can do the work of one extraordinary man. - 
                    Elbert Hubbard
                </h2>
            </div> 
            <nav className="navbar">
                <div className="navbar_container">
                    <ul className="navbar_menu">
                        <li className="navbar_item">
                            <Link to="/" className="navbar_links">Home</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/about" className="navbar_links">About Me</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/coursedescription.html" className="navbar_links">Course Description</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/coursework.html" className="navbar_links">Samples of Coursework</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/educationplan.html" className="navbar_links">Student Education Plan</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/awards.html" className="navbar_links">Awards</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/evaluation.html" className="navbar_links">Evaluation</Link>
                        </li>
                        <li className="navbar_item">
                            <Link to="/contact.html" className="navbar_links">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;