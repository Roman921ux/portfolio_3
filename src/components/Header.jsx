import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [active_h, setActive_h] = useState(false);
    const [active_p, setActive_p] = useState(false);
    const [active_a, setActive_a] = useState(false);
    const [active_c, setActive_c] = useState(false);
    const onClick_h = () => {
        if (active_p === true ) {
            setActive_p(!active_p)
        }  else if (active_a === true ) {
            setActive_a(!active_a)
        } else if (active_c === true ) {
            setActive_c(!active_c)
        }

        setActive_h(!active_h)
    }
    const onClick_p = () => {
        if (active_h === true ) {
            setActive_h(!active_h)
        }  else if (active_a === true ) {
            setActive_a(!active_a)
        } else if (active_c === true ) {
            setActive_c(!active_c)
        }

        setActive_p(!active_p)
    }
    const onClick_a = () => {
        if (active_h === true ) {
            setActive_h(!active_h)
        } else if (active_p === true ) {
            setActive_p(!active_p)
        } else if (active_c === true ) {
            setActive_c(!active_c)
        }

        setActive_a(!active_a)
    }
    const onClick_c = () => {
        if (active_h === true ) {
            setActive_h(!active_h)
        }  else if (active_p === true ) {
            setActive_p(!active_p)
        }
        else if (active_a === true ) {
            setActive_a(!active_a)
        }

        setActive_c(!active_c)
    }
  return (
    <header className='header'>
        <div className="header__title"></div>
        <nav className="header__nav">
            <ul className="header__list">
                <Link to="/"><li className={active_h ? "header__item-active" : "header__item"} onClick={onClick_h}><a href="" className={active_h ? "header__item-active_link" : "header__item_link"}>Home</a></li></Link>
                <Link to="/project"><li className={active_p ? "header__item-active" : "header__item"} onClick={onClick_p}><a href="" className={active_p ? "header__item-active_link" : "header__item_link"}>Project</a></li></Link>
                <Link to="/about"><li className={active_a ? "header__item-active" : "header__item"} onClick={onClick_a}><a href="" className={active_a ? "header__item-active_link" : "header__item_link"}>About</a></li></Link> 
                <Link to="/contacts"><li className={active_c ? "header__item-active" : "header__item"} onClick={onClick_c}><a href="" className={active_c ? "header__item-active_link" : "header__item_link"}>Contacts</a></li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header