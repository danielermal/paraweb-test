import React from "react";
import header from './header.module.scss'
import logo from '../../images/logo.svg'

export const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.header_content}>
                <img src={logo} alt="logo" className={header.logo} />
                <ul className={header.list}>
                    <li>
                        <span>8 800 000 00 00</span>
                    </li>
                    <li>
                        <span>sales@logo.ru</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}