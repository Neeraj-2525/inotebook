import React, { useEffect } from 'react'
import { Link } from 'react-scroll';


const LandingPage = () => {



    return (
        <div className="landingPageWrapper">
            <div className='container-fluid landingPageHero'>
                <div className="landingHeroText container">
                    <h1>Get Started With <span>iNotes</span></h1>
                    <p>Unlock Your Productivity with iNotes, Your Personal Note-Keeping Companion. Organize, Capture, and Share Your Thoughts Effortlessly. </p>
                    <Link to="aboutSection" smooth={true} duration={1000}>
                        <button type="submit" className="btn btn-light addSubmitBtn">Get Started</button>
                    </Link>
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

            <div className="testimonialsWrapper mt-2">
                <div className="testimonials container">
                    <h1 className='my-2'>What People Says About Us</h1>
                    <div class="card-group gap-4 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">"iNotes has made my life so much easier! I can now manage my notes effortlessly and find what I need in an instant. Highly recommended for anyone seeking better organization!"</p>
                                <em className='opacity-50'>John Doe - Productivity Enthusiast</em>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">"With iNotes, I'm always ahead of my tasks. The reminders keep me on track, and the collaboration feature helps me work seamlessly with my team."</p>
                                <em className='opacity-50'>Grace T. - Efficient and Organized</em>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p class="card-text">"iNotes keeps me organized, and the multi-platform sync is a lifesaver. It's now so easy to access my notes whenever and wherever I need them!"</p>
                                <em className='opacity-50'>Sophia K. - Streamlined and Time-Saving</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
