import React from "react"
import s from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img src="https://cdn.cdnlogo.com/logos/r/63/react.svg"/>
            </header>
        </div>
    )
};

export default Header;