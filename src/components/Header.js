import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header> 
            <div class="image_container">
                <img class="header_image" src="images/minimalizm-monitor-kompyuter.jpg" alt="Logo" />
                <h2 class="header_quote">One machine can do the work of fifty ordinary men.  
                    No machine can do the work of one extraordinary man. - 
                    Elbert Hubbard
                </h2>
            </div> 
            <nav class="navbar">
                <div class="navbar_container">
                    <ul class="navbar_menu">
                        <li class="navbar_item">
                            <a href="index.html" class="navbar_links">Home</a>
                        </li>
                        <li class="navbar_item">
                            <a href="aboutme.html" class="navbar_links">About Me</a>
                        </li>
                        <li class="navbar_item">
                            <a href="coursedescription.html" class="navbar_links">Course Description</a>
                        </li>
                        <li class="navbar_item">
                            <a href="coursework.html" class="navbar_links">Samples of Coursework</a>
                        </li>
                        <li class="navbar_item">
                            <a href="educationplan.html" class="navbar_links">Student Education Plan</a>
                        </li>
                        <li class="navbar_item">
                            <a href="awards.html" class="navbar_links">Awards</a>
                        </li>
                        <li class="navbar_item">
                            <a href="evaluation.html" class="navbar_links">Evaluation</a>
                        </li>
                        <li class="navbar_item">
                            <a href="contact.html" class="navbar_links">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;