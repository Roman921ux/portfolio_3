import React from 'react'

function About() {
    return (
        <main className='main-about'>
            <section className="section-Hey">
                <div className="section-Hey__title">Hey,<br/> I`m Joey</div>
                <div className="section-Hey__img">
                    <img src='../imgs/img_9.jfif'/>
                </div>
                <div className="section-Hey__flex-text">
                    <div className="section-Hey__text">
                        <p className='p_1'>
                            Embarking on a journey of growth and education. I`ve spent 9 yers collaborating
                            remotely alongside Innovative individuals from agencies, startups, and small
                            companies on myriad design ventures.
                        </p>
                        <p className='p_2'>
                            My mastery of design and marketing stemms from array of online courses and tools
                            such as Thefutur, Mizko, Flux Academy, and Sabri Suby, equipping me with the
                            expertise and abilities to excel in the field. In my leisure time. I relish taskling professional
                            projects and immersing myself in design-centric materials.
                        </p>
                        <p className='p_3'>
                            Additionally, I am a dedicated video game enthusiast and find that a musical blend of
                            hip-hop and jazz aids in maintaining productivity and concentration work.                            
                        </p>
                    </div>
                    <div className="section-Hey__link">hello@joey.co</div>
                </div>
            </section>
            <section className="section-Why">
                <div className="section-Why__title">Why Collaborate<br/> with me?</div>
                <div className="section-Why__flex-block">

                    <div className="section-Why__item">
                        <div className="section-Why__item_img">
                        </div>
                        <img src='../imgs/img_9.png'/>
                        <div className="section-Why__item_title">Client-Centric</div>
                        <div className="section-Why__item_text">
                            Your goals are our focus. We
                            listen, understand, and work
                            closely with you to achieve
                            your visio
                        </div>
                    </div>
                    <div className="section-Why__item">
                        <div className="section-Why__item_img"></div>
                        <div className="section-Why__item_title">Tailored Solutions</div>
                        <div className="section-Why__item_text">
                            We dont`t do one-size-fits-all.
                            We craft solutions that are 
                            unique to your business,
                            ensuring you stand out in your
                            industry.
                        </div>
                    </div>
                    <div className="section-Why__item">
                        <div className="section-Why__item_img"></div>
                        <div className="section-Why__item_title">Creative Innovation</div>
                        <div className="section-Why__item_text">
                            We stay ahead of design and
                            branding trends to offer fresh
                            and innovative ideas that set
                            you apart.
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-Design">
                <div className="section-Design__title">Design Process</div>

                <div className="section-Design__block-left">
                    <div className="section-Design__item-left section-Design__item">
                        <div className="section-Design__item_title-mumber">01</div>
                        <div className="section-Design__item_title">Discovery</div>
                        <div className="section-Design__item_text">
                            To start, we`ll asquire comprehension of your company and how
                            consumers interact with your offerings. In this phase, recognizing
                            the core issue will be accomplished by examining and studying the
                            collected data.
                        </div>
                    </div>
                </div>
                <div className="section-Design__block-right">
                    <div className="section-Design__item-right section-Design__item">
                        <div className="section-Design__item_title-mumber">02</div>
                        <div className="section-Design__item_title">Strategy</div>
                        <div className="section-Design__item_text">
                            Utilizing the collected data, we`ll create a design plan focused on
                            user needs, aiming to tackle user issues and boost your company`s
                            performance.
                        </div>
                    </div>
                </div>
                <div className="section-Design__block-left">
                    <div className="section-Design__item-left section-Design__item">
                        <div className="section-Design__item_title-mumber">03</div>
                        <div className="section-Design__item_title">Design</div>
                        <div className="section-Design__item_text">
                            I will proceed to roll up my sleeves and craft functional, engaging
                            interfaces that adhere to visual guidelines, ensuring a consistent
                            brand identity. Above all, the design will adeptly tackle user and
                            business concerns in a seamless and proficient way. 
                        </div>
                    </div>
                </div>
                <div className="section-Design__block-right">
                    <div className="section-Design__item-right section-Design__item">
                        <div className="section-Design__item_title-mumber">04</div>
                        <div className="section-Design__item_title">Discovery</div>
                        <div className="section-Design__item_text">
                            Following the manipulation of countless pixels and crafting the
                            code, we`ll possess a finalized project prepared for worldwide
                            distribution. This endeavor might necessitate substantial coffee
                            consumption to maintain my energy levels.
                        </div>
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

export default About