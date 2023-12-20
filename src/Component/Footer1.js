import React from "react";
import "../Css/Footer1.css";
<script src="https://kit.fontawesome.com/1165876da6.js" crossOrigin="anonymous"></script>

function Footer() {
    return (
        <div>
            <footer>
                <div className="footerContainer">
                    <div className="footer2ndDiv">
                        <div>
                            <h1>About Us</h1>
                            <p className="aboutuss">This is a E-commerce Website<br /> made using React dynamic routing concept.<p className="degineby">Degine by- Rohit yadav</p> </p>
                        </div>
                        <div className="footercontact">
                            <h1>Contact Us</h1>
                            <div className="navcontact">
                                <p>Email: ry707178@gmail.com</p>
                                <p>Phone: +917800962194</p>
                                <p>Address: Jaunpur UP</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer2ndDiv">
                        <div className="footerLink">
                            <h1>Search</h1>
                            <div className="search">
                                <p><a href="https://www.google.com/" className="a">Google</a></p>
                                <p> <a href="https://www.flipkart.com/" className="a">FlipKart</a></p>
                                <p> <a href="https://my.naukri.com/" className="a">Naukri.com</a></p>
                            </div>
                        </div>
                        <div className="footerSocilMedia">
                            <h1>Follow Us</h1>
                            <div className="navSocialmedia">
                                <a href="https://www.facebook.com/profile.php?id=100016012260785" target="_blank" rel="noopener noreferrer">
                                    <img className="navsicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU" alt="Not Found" />
                                </a>

                                <a href="https://www.youtube.com/channel/UCNjC87uhbojBVyQrnstFBCQ" target="_blank" rel="noopener noreferrer">
                                    <img className="navsicon" src="https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg?w=1060" alt='Not Found' />
                                </a>

                                <a href="https://www.instagram.com/rohit_yadav_4099/" target="_blank" rel="noopener noreferrer">
                                    <img className='navsicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found' />
                                </a>

                                <a href="https://www.linkedin.com/in/rohit-yadav-21404124b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bzmc3vt9IR4ug2%2FdBZVF5gQ%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <img className="navsicon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
