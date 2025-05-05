import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CourseWork() {
    // State to hold the content for the modal (type, src, title) or null if closed
    const [modalContent, setModalContent] = useState(null);

    const openModal = (type, src, title) => {
        setModalContent({ type, src, title });
    };

    const closeModal = () => {
        setModalContent(null);
    };

    // Prevent clicks inside the video player from closing the modal
    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <main>
            <h1>Please click on the links to review examples of my assignments below.</h1>
            <div className='div_coursework'>
                <h3>WEB 151 - Mobile Application Development I</h3>
                {/* Make the title clickable */}
                <p>
                    <span
                        className="clickable-link"
                        onClick={() => openModal('video', '/videos/web151appvid.mp4', 'WEB 151 - Final Mobile Application Demo')}
                    >
                        Final Mobile Application
                    </span>
                    {' | '} {/* Separator */}
                    <span
                        className="clickable-link"
                        onClick={() => openModal('image', '/images/web151blocks.png', 'WEB 151 - Application Blocks')}
                    >View Blocks</span>
                    {' | '} {/* Separator */}
                    <span
                        className="clickable-link"
                        onClick={() => openModal('image', '/images/web151designer.png', 'WEB 151 - Application Designer')}
                    >View Designer</span>
                </p>
                <p>This is the app I used for my final project in my Android app development class. I made a space invaders inspired game using the pictures and sounds of one my favorite irreverent cartoons from my childhood.
                     It was a challenging process to create the game logic with basic tools not geared towards that kind of development. I learned how to use the images as objects and how to manipulate their state with timers and interactivity by checking for if the positions of the objects intersected.</p>
            </div>

            <div className='div_coursework'>
                <h3>CSC 151 - Java Programming</h3>
                <a
                    href="https://github.com/awalk014/SchoolWork/tree/cc2e06f0e6e13b81c093b24b1c1c446ab67eba9f/Final"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-link"
                >Java Programming Final Project</a>
                <p>This is the link to my final project for my Java Programming class. We had to build a program that simulates the software a car dealership would use to store all relevant information
                    about the cars they have for sale. I used Java's object-oriented programming features to create a program that allows the user to add, remove, and search for cars in the dealership's inventory. I also used Java's file I/O capabilities to save and load the inventory from a file.
                </p>
            </div>

            <div className='div_coursework'>
                <h3>CSC 251 - Advanced Java Programming</h3>
                <p>
                <span
                        className="clickable-link"
                        onClick={() => openModal('video', '/videos/LatinTranslate_Encode.mp4', 'CSC 251 - Latin Translate Project Video')}
                    >Latin Translate Project</span>
                {' | '} {/* Separator */}
                <a
                    href="https://github.com/awalk014/SchoolWork/tree/557d32cd77ac1dac333a2f39e7733852f67e3c20/LatinTranslator_BenjaminWalker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-link"
                >Latin Translate Project (NetBeans Project)</a>
                </p>
                <p>This project demonstrates the basics of using GUI elements with JavaFX. Learning how to use the fundamental objects (Stages, Scenes, Nodes, etc.) is essential for building 
                    applications with human-friendly interfaces. Customer facing software is only as good as its user experience.</p>
            </div>

            <div className='div_coursework'>
                <h3>WEB 182 - PHP Programming</h3>
                <p>
                <a
                    href="https://github.com/awalk014/SchoolWork/blob/8975d51b36ecd2585e8789e9f436d2ae5698a84b/send-email.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickable-link"
                >PHP Send Email Script</a>
                </p>
                <p>I have included an anonmyous version of my PHP script hosted on my backend site. I have not included any personalable identifiable information for security purposes.
                    This script is a simple example of how to send an email using PHP. It uses the PHPMailer library to send the email and includes basic error handling. 
                    The script takes the recipient's email address, subject, and message as input and sends the email using the SMTP protocol. 
                    This is a common task in web development, and I have used this script in several projects to send notifications and alerts.
                </p>
            </div>


            {/* Modal Structure */}
            {modalContent && (
                // The overlay div, clicking this closes the modal
                <div className="video-modal-overlay" onClick={closeModal}>
                    {/* The modal content area, clicks here are stopped from closing */}
                    <div className="video-modal-content" onClick={handleModalContentClick}>
                        <button className="video-modal-close" onClick={closeModal}>&times;</button>

                        {/* Conditionally render video or image */}
                        {modalContent.type === 'video' && (
                            <video controls autoPlay width="80%" /* Adjust width as needed */ >
                                {/* The path starts with '/' because it's relative to the public folder */}
                                <source src={modalContent.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {modalContent.type === 'image' && (
                            <img
                                src={modalContent.src}
                                alt={modalContent.title}
                                className="modal-image" /* Add class for styling */
                            />
                        )}

                        {/* Display the title */}
                        <p>{modalContent.title}</p>
                    </div>
                </div>
            )}
        </main>
    );
}

export default CourseWork;