import React from 'react'

function Contacts() {
  return (
    <main className='main-contacts'>
        <section className="section-input">
            <div className="section-input__title">
                Have a project idea? Let`s discuss it together.
            </div>
            <form action="" className="section-input__form">
                <input type="text" className='section-input__form_inp' placeholder='Name'></input>
                <input type="email" className='section-input__form_inp' placeholder='Email address'></input>
                <input type="phon" className='section-input__form_inp' placeholder='Mobile Number'></input>
                <input type="text" className='section-input__form_inp-h' placeholder='Tell us more about your project'></input>
                <button tyope="submit" className='section-input__form_btn'>Submit</button>
            </form>
        </section>
    </main>
  )
}

export default Contacts