import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main className='main-home'>
            <section className="section-Website">
                <div className="section-Website__title">Websites&<br />Branding</div>
                <div className="section-Website__scroll">SCROLL DOWN</div>
                <div className="section-Website__flextext">
                    <div className="section-Website__block">
                        <div className="section-Website__block_title">Let`s Talk</div>
                        <div className="section-Website__block_text">hello@joey.co</div>
                    </div>
                    <div className="section-Website__text">
                        Hello, I`m Joey, an online product designer focusing on brand
                        identity, advertising, and no-code instruments.
                    </div>
                </div>

            </section>
            <section className="section-Project">
                <div className="section-Project__flextext">
                    <div className="section-Project__block">
                        <div className="section-Project__block_title">Projects</div>
                        <div className="section-Project__block_text">
                            As a seasoned creator of contemporary,
                            user-friendly web designs and digital solutions,
                            I aim to assist you in constructing
                            the brand of your fantasies.
                        </div>
                    </div>
                    
                    <div className="section-Project__link">More</div>
                </div>
                <div className="section-Project__card-grid">

                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-phone' src='imgs/img_1.jfif' />
                        </div>
                        <div className="section-Project__item_title">Crtly</div>
                        <div className="section-Project__item_text">Mobile App</div>
                    </div>
                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-website' src='imgs/img_2.jfif' />
                        </div>
                        <div className="section-Project__item_title">Tansto</div>
                        <div className="section-Project__item_text">Web Design</div>
                    </div>
                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-phone' src='imgs/img_3.jfif' />
                        </div>
                        <div className="section-Project__item_title">Senta</div>
                        <div className="section-Project__item_text">Mobile App & Branding</div>
                    </div>
                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-logo' src='imgs/img_8.jfif' />
                        </div>
                        <div className="section-Project__item_title">Crint</div>
                        <div className="section-Project__item_text">Mobile App</div>
                    </div>

                </div>
            </section>
            <section className="section-Expertise">
                <div className="section-Expertise__title">Expertise</div>
                <div className="section-Expertise__grid-text">
                    <ul className="section-Expertise__item">
                        <li className="section-Expertise__item_title">Branding</li>
                        <p className="section-Expertise__item_text">
                            Collaborating closely, we`ll develop an impactful
                            brand identity for your emerging enterprise. The
                            full spectrum of brand analysis and design is
                            addressed, culminating in a visually stunning,
                            evergreen logo concept.
                        </p>
                    </ul>
                    <ul className="section-Expertise__item">
                        <li className="section-Expertise__item_title">Ul Design</li>
                        <p className="section-Expertise__item_text">
                            I create efficient, adaptable, and engaging
                            websites. No predefined patterns. No sluggish,
                            complex code. Webflow forms the foundation of
                            my web development approach. I employ it to
                            provide safe, top-notch bespoke websites.
                        </p>
                    </ul>
                    <ul className="section-Expertise__item">
                        <li className="section-Expertise__item_title">UX Design</li>
                        <p className="section-Expertise__item_text">
                            I comprehend and resole digital product issues
                            using a user-focused methodology, Investigation,
                            compassion, and visual conveyance are a few
                            techniques I apply to captivate and involve your
                            users while fulfilling your business requirements.
                        </p>
                    </ul>
                    <ul className="section-Expertise__item">
                        <li className="section-Expertise__item_title">Development</li>
                        <p className="section-Expertise__item_text">
                            I create user-friendly, adaptive, engaging
                            websites. No cookie-cutters. No cumbersome,
                            complex coding. Webflow forms the foundation
                            of my web development approach. I employ it to
                            produce safe, top-notch personalized websites.
                        </p>
                    </ul>
                </div>
            </section>
            <section className="section-Design">
                <marquee>design for digital experitise</marquee>
            </section>
            <section className="section-Testimonials">
                <div className="section-Testimonials__flex-block">
                    <div className="section-Testimonials__text">
                        <div className="section-Testimonials__text_title">Testimonials</div>
                        <div className="section-Testimonials__text_text">
                            "Joey is a remarkable artist. He grasps
                            abstract ideas and transforms them into
                            exceptional visuals. Throughout the years,
                            I`ve witnessed him produce everything from
                            small symbols to comprehensive adaptive
                            web pages. He has crafted clothing items
                            like tees and caps, promotional products,
                            and professional literature."
                        </div>
                    </div>
                    <div className="section-Testimonials__text">
                        <span>Chris Ellington</span>
                        <p>Product Lead.Gatha.</p>
                    </div>
                </div>
            </section>
            <section className="section-Lets">
                <div className="section-Lets__title">Let`s talk!</div>
                <a href="#" className="section-Lets__link">hello@joey.co</a>
            </section>
        </main>
    )
}

export default Home