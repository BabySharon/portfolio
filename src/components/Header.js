import React,{useState} from 'react'

import './Header.css'

export default function Header() {
    const [toggle, setToggle] = useState(1);
    return (        
        <div className='header'>
            <div className = 'button-wrapper'>
                <div className = 'header-button'><p>Ms.Sharon</p></div>
                <div className = 'header-button'><p>Just me!</p></div>
            </div>
        </div>
    )
}


