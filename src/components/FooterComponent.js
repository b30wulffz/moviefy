import React from 'react';

function Footer(){
    return (
        <footer id="footer">
                
            <div id="credits">
                <p>&copy; 2019</p>
                <p>Made by Shlok Pandey</p>
                <p><a href="https://github.com/b30wulffz/moviefy"><b><i class="fas fa-code-branch"></i> Fork it</b></a></p>
            </div>
            <div id="contact">
                <h3>Contact Us:</h3>
                <div id="contact-links">
                    <a href="https://www.facebook.com/shl0k"><i className="fab fa-facebook-square"></i> Facebook</a>
                    <a href="https://www.linkedin.com/in/shl0k/"><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a href="https://twitter.com/b30wulffz"><i className="fab fa-twitter-square"></i> Twitter</a>
                </div>
                
            </div>

        </footer>
    );
}

export default Footer