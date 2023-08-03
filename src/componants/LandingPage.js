import React from 'react'
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="landingPageWrapper">
            <div className='container-fluid landingPageHero'>
                <div className="landingHeroText container">
                    <h1>Get Started With <span>iNotes</span></h1>
                    <p>Unlock Your Productivity with iNotes, Your Personal Note-Keeping Companion. Organize, Capture, and Share Your Thoughts Effortlessly. </p>
                    <LinkScroll to="aboutSection" smooth={true} duration={500}>
                        <button type="submit" className="btn btn-light exploreBtn">Explore</button>
                    </LinkScroll>
                </div>
            </div>

            <div className="aboutSectionWrapper" id='aboutSection'>
                <div className="aboutSection">
                    <div id="about" className='container'>
                        <h1 className='mb-5'>Your Personal Note-Keeping Companion</h1>
                        <div className="aboutServices">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card">

                                        <div className="card-body">
                                            <h5 className="card-title">Intuitive Interface</h5>
                                            <p className="card-text">Our user-friendly interface ensures a smooth and hassle-free note-taking experience. Organize your notes with ease and find what you need instantly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Flexible Organization</h5>
                                            <p className="card-text">Categorize and tag your notes to keep them structured. Our powerful search feature allows you to quickly locate specific notes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Collaboration Made Easy</h5>
                                            <p className="card-text">Share your notes with colleagues, friends, or family members. Collaborate in real-time to work together seamlessly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Security & Privacy</h5>
                                            <p className="card-text">We take data security seriously. Your notes are encrypted and stored securely, ensuring your privacy is protected.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Tags and Categories</h5>
                                            <p className="card-text">Allow users to create custom tags and categories for better organization and easy retrieval of notes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Note History</h5>
                                            <p className="card-text">Offer a version history feature that allows users to review and restore previous versions of their notes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonialsWrapper mt-2 mb-3">
                <div className="testimonials container">
                    <h1 className='my-2'>What People Says About Us</h1>
                    <div className="card-group gap-4 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"iNotes has made my life so much easier! I can now manage my notes effortlessly and find what I need in an instant. Highly recommended for anyone seeking better organization!"</p>
                                <em className='opacity-50'>John Doe - Productivity Enthusiast</em>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"With iNotes, I'm always ahead of my tasks. The reminders keep me on track, and the collaboration feature helps me work seamlessly with my team."</p>
                                <em className='opacity-50'>Grace T. - Efficient and Organized</em>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"iNotes keeps me organized, and the multi-platform sync is a lifesaver. It's now so easy to access my notes whenever and wherever I need them!"</p>
                                <em className='opacity-50'>Sophia K. - Streamlined and Time-Saving</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="zigZag opacity-25 mb-5 pt-5">
                <svg _ngcontent-nbg-c18="" aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><pattern _ngcontent-nbg-c18="" id="a" width="91" height="8" patternUnits="userSpaceOnUse"><g _ngcontent-nbg-c18="" clipPath="url(#clip0_2426_11367)"><path _ngcontent-nbg-c18="" d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" strokeLinecap="square"></path></g></pattern><rect _ngcontent-nbg-c18="" width="100%" height="100%" fill="url(#a)"></rect></svg>
            </div>

            <div className="footer container">
                <div className="footerContent">
                    <div className="footerLeft">
                        <div className="footerLogo">
                            <h2 style={{ color: '#e3e3e3' }}>iNotes</h2>
                        </div>
                        <div className="footerText">
                            <p>
                                iNotes - Your Personal Note-Keeping Companion. Stay organized, capture ideas, collaborate effortlessly. © 2023 iNotes. All rights reserved.
                            </p>
                        </div>
                    </div>

                    <div className="footerRight">
                        <div className="footer-social">
                            <span>Social</span>
                            <ul>
                                <li><Link to="/#">GitHub</Link></li>
                                <li><Link to="/#">Twitter</Link></li>
                                <li><Link to="/#">Reddit</Link></li>
                                <li><Link to="/#">YouTube</Link></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <span>Versions</span>
                            <ul>
                                <li><Link href="/">iNote 1</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footLine">
                    <ul>
                        <li><Link to="/#">Privacy Policy</Link></li>
                        <li><Link to="/#">Terms And Conditions</Link></li>
                        <li><Link to="/#">Developers</Link></li>
                        <li><Link to="/#">Feedback</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
