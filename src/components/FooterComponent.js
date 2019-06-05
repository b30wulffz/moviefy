import React from 'react';

function Footer(){
    return (
        <footer id="footer">
                
            <div id="credits">
                <p>&copy; 2019</p>
                <p>Made by Shlok Pandey</p>
            </div>
            <div id="contact">
                <h3>Contact Us:</h3>
                <div id="contact-links">
                    <a href=""><i className="fab fa-facebook-square"></i> Facebook</a>
                    <a href=""><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a href=""><i className="fab fa-twitter-square"></i> Twitter</a>
                </div>
                
            </div>

        </footer>
    );
}

export default Footer