import React from "react";
import header from './header.module.scss'
import logo from '../../images/logo.svg'
import phone from '../../images/phone.svg'
import mail from '../../images/mail.svg'

export const Header = () => {
    const [state, setState] = React.useState({phone: false, mail: false})

    const showNumber = () => {
        setState({...state, phone: !state.phone})
    }

    const showMail = () => {
        setState({...state, mail: !state.mail})
    }

    return (
        <header className={header.header}>
            <div className={header.header_content}>
                <img src={logo} alt="logo" className={header.logo} />
                <ul className={header.list}>
                    <li>
                        <span className={header.text} >8 800 000 00 00</span>
                    </li>
                    <li>
                        <span className={header.text} >sales@logo.ru</span>
                    </li>
                    <li>
                        <img src={phone} alt="phone" className={header.icon} onClick={showNumber} />
                        {state.phone && '8 800 000 00 00'}
                    </li>
                    <li>
                        <img src={mail} alt="mail" className={header.icon} onClick={showMail} />
                        {state.mail && 'sales@logo.ru'}
                    </li>
                </ul>
            </div>
        </header>
    )
}