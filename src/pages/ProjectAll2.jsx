import React from 'react'
import { Link } from 'react-router-dom'
import ProjectAllCompnt from '../components/ProjectAllCompnt'

function ProjectAll2() {
  return (
    <main className='main-projectAll2'>
      <section className="section-goby">
        <div className="section-goby__link-back">
          <Link to="/project">Projects - Page</Link>
        </div>
        <div className="section-goby__title">
          Go by one dresscode; wear your<br />
          heart on your sleeve
        </div>
        <div className="section-goby__text">
          As emerging sectors arise and current ones become saturated, youlll need to differentiate yourself.
          Enter ‘branding. We assist you in developing a memorable brand. One that shares your narrative. One
          that establishes expectations. One that fosters connections with your audience and maintains them
          robustly.
        </div>
        <div className="section-goby__block-img">
          <div className="section-goby__block-img_img">
            <img src='../imgs/img_2.jfif' />
          </div>
          <div className="section-goby__block-img_text">
            <p>
              First, let's tackle the elephant in the room: whatis ‘brand’? In a nutshell, your brand represents how people perceive and feel about you.
              Maybe you haven't considered your business as a brand, or perhaps you did, but it vanished amidst growing your team and developing your
              product.
            </p>
            <p>
              Whatever the situation, our branding teamis here for you. We begin by addressing the tough questions that truly matter. During a Brand
              Sprint, we align your team with your vision and mission, seeking out what sets your business apart and converting our findings into a brand
              concept ~ a unique fusion of a metaphorical theme and elements such as color. typeface, shape, tone of voice, topped off with a logo.
            </p>
            <p>
              The only thing welll require from yous to reveal your genuine colors. You see, we believe no one should have to feign being something
              they're not. Your (potential) audience can see right through it. Fortunately for us. they can also recognize an authentic brand. We assist you
              in discovering the right words and provide you with a microphone to amplify your brand message.
            </p>
          </div>
          <div className="section-goby__block-img_small-text">
            ‘What our cients say about working on branding project with us
          </div>
        </div>
      </section>
      <section className="section-Testimonials">
        <div className="section-Testimonials__flex-block">
          <div className="section-Testimonials__text">
            <div className="section-Testimonials__text_text">
              ‘Joey is aremarkable artist. He grasps

              abstract ideas and transforms them into

              exceptional visuals. Throughout the years,

              I've witnessed him produce everything from

              small symbols to comprehensive adaptive

              web pages. He has crafted clothing items

              like tees and caps, promotional products, sive ttngton
              and professional literature.”
            </div>
          </div>
          <div className="section-Testimonials__text">
            <span>Chris Ellington</span>
            <p>Product Lead.Gatha.</p>
          </div>
        </div>
        <div className="section-Testimonials__flex">

          <div className="section-Testimonials__text-block">
            <div className="section-Testimonials__text-block_title">15+</div>
            <div className="section-Testimonials__text-block_text">Launched Brands</div>
          </div>
          <div className="section-Testimonials__text-block">
            <div className="section-Testimonials__text-block_title">50M+</div>
            <div className="section-Testimonials__text-block_text">Views Per Month</div>
          </div>
          <div className="section-Testimonials__text-block">
            <div className="section-Testimonials__text-block_title">4+</div>
            <div className="section-Testimonials__text-block_text">Brand Experts</div>
          </div>

        </div>
      </section>
      
      <section className="section-faq">
        <div className="section-faq__flex-block">
          <div className="section-faq__title">FAQs about Branding</div>
          <div className="section-faq__block">
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item'}/>
            <ProjectAllCompnt borderNone={'section-faq__item-none'}/>
          </div>
        </div>
      </section>

      <section className="section-our">
        <div className="section-our__title">Our tools of choice</div>
        <div className="section-our__flex-block">
          
          <div className="section-our__item">
            <div className="section-our__item_img">
              <img src='sdf'/>
            </div>
            <div className="section-our__item_text">Figma</div>
          </div>
          <div className="section-our__item">
            <div className="section-our__item_img">
              <img src='as'/>
            </div>
            <div className="section-our__item_text">Slack</div>
          </div>
          <div className="section-our__item">
            <div className="section-our__item_img">
              <img src='as'/>
            </div>
            <div className="section-our__item_text">Linear</div>
          </div>
          <div className="section-our__item">
            <div className="section-our__item_img">
              <img src='as'/>
            </div>
            <div className="section-our__item_text">Notion</div>
          </div>
          

        </div>
      </section>
      <section className="section-Project-All">
                <div className="section-Project-All__flextext">
                    <div className="section-Project-All__block">
                        <div className="section-Project-All__block_title">Resent Projects</div>
                        <div className="section-Project-All__block_text">
                           
                        </div>
                    </div>
                    <div className="section-Project-All__link">More</div>
                </div>
                <div className="section-Project-All__card-grid">

                    <div className="section-Project-All__item">
                        <div className="section-Project-All__item_img">
                            <img className='img-phone' src='../imgs/img_1.jfif' />
                        </div>
                        <div className="section-Project-All__item_title">Crtly</div>
                        <div className="section-Project-All__item_text">Mobile App</div>
                    </div>
                    <div className="section-Project-All__item">
                        <div className="section-Project-All__item_img">
                            <img className='img-website' src='../imgs/img_2.jfif' />
                        </div>
                        <div className="section-Project-All__item_title">Tansto</div>
                        <div className="section-Project-All__item_text">Web Design</div>
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

export default ProjectAll2