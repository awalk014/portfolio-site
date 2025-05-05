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
                <h3>CSC 151 - Mobile Application Development I</h3>
                {/* Make the title clickable */}
                <p>
                    <span
                        className="clickable-link"
                        onClick={() => openModal('video', '/videos/web151appvid.mp4', 'CSC 151 - Final Mobile Application Demo')}
                    >
                        Final Mobile Application
                    </span>
                    {' | '} {/* Separator */}
                    <span
                        className="clickable-link"
                        onClick={() => openModal('image', '/images/web151blocks.png', 'CSC 151 - Application Blocks')}
                    >View Blocks</span>
                    {' | '} {/* Separator */}
                    <span
                        className="clickable-link"
                        onClick={() => openModal('image', '/images/web151designer.png', 'CSC 151 - Application Designer')}
                    >View Designer</span>
                </p>
                <p>This is the app I used for my final project in my Android app development class. I made a space invaders inspired game using the pictures and sounds of one my favorite irreverent cartoons from my childhood. It was a challenging process to create the game logic with basic tools not geared towards that kind of development. I learned how to use the images as objects and how to manipulate their state with timers and interactivity by checking for if the positions of the objects intersected.</p>
            </div>
            <div className='div_coursework'>
                <h3>CSC 251 - Advanced Java Programming</h3>

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