import React from 'react'
import { useState } from 'react'

function ProjectAllCompnt({borderNone}) {
    const [open, setOpen] = useState(false)

    const changeOpen = () => {
        setOpen(!open)
    }
    return (
        <div className={borderNone}> 
            <div className="section-faq__item_flex-block">
                <div className="section-faq__item_title">Is copywriting included in the services you provide?</div>
                <div className="section-faq__item_icon" onClick={changeOpen}>{open ? '-' : '+'}</div>
            </div>
            <div className={open ? "section-faq__item_text-open" : "section-faq__item_text-close"}>
                While we don't offer copywriting as a standalone service we do prioritize crafting
                a.compelling and engaging tone and voice based on your brand's identity.
                Needless to say these are defined in Brand Identity Guidelines providing you with
                a framework for future reference and consistency.
            </div>
        </div>
    )
}

export default ProjectAllCompnt