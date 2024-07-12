import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1></h1>
            <div className="about-content">
                <div className="about-image">
                    <img src='src/assets/sipnplay-about.webp' alt="About Us" className="large-image" />
                </div>
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>
                        Sip & Play NYC was founded with the vision of creating a unique blend of entertainment and education. Our mission is to provide a fun and engaging environment where people of all ages can come together to learn, play, and create lasting memories.
                    </p>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Inclusivity:</strong> We welcome everyone, regardless of age, background, or skill level.</li>
                        <li><strong>Fun:</strong> We believe that learning should be fun and enjoyable.</li>
                        <li><strong>Community:</strong> We strive to build a strong, supportive community where everyone feels at home.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
