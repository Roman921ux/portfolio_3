import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
    return (
        <main className='main-project'>
            <section className="section-Project">

                <div className="section-Project__block-text">
                    <div className="section-Project__block-text_title">Project</div>
                    <div className="section-Project__block-text_text">
                        I`m dedicated to assisting indviduals and companies in crafting
                        memorable cline interactions, utilizing my skills in user
                        experience. Webflow, and internet marketing.
                    </div>
                </div>
                <div className="section-Project__card-grid">

                    <div className="section-Project__item">
                        <Link to="/project/all">
                            <div className="section-Project__item_img">
                                <img className='img-phone' src='imgs/img_1.jfif' />
                            </div>
                        </Link>

                        <div className="section-Project__item_title">Crtly</div>
                        <div className="section-Project__item_text">Mobile App</div>
                    </div>

                    <div className="section-Project__item">
                        <Link to="/project/all2">
                            <div className="section-Project__item_img">
                                <img className='img-website' src='imgs/img_2.jfif' />
                            </div>
                        </Link>
                        <div className="section-Project__item_title">Tansto</div>
                        <div className="section-Project__item_text">Web Design</div>
                    </div>
                    <div className="section-Project__item">
                        <Link to="/project/all3">
                            <div className="section-Project__item_img">
                                <img className='img-phone' src='imgs/img_3.jfif' />
                            </div>
                        </Link>
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
                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-phone-n' src='imgs/img_12.jfif' />
                        </div>
                        <div className="section-Project__item_title">Crtly</div>
                        <div className="section-Project__item_text">Mobile App</div>
                    </div>
                    <div className="section-Project__item">
                        <div className="section-Project__item_img">
                            <img className='img-phone-p' src='imgs/img_13.jfif' />
                        </div>
                        <div className="section-Project__item_title">Tansto</div>
                        <div className="section-Project__item_text">Web Design</div>
                    </div>


                </div>
                <p href="#" className="section-Project__link">Load More</p>
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

export default Project