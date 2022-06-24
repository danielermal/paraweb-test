import footer from './footer.module.scss'
import logo from '../../images/logofooter.svg'
import vk from '../../images/vk.svg'
import tg from '../../images/telegram.svg'
import youtube from '../../images/youtube.svg'
import tw from '../../images/twitter.svg'

export const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.footer_container}>
                <img src={logo} alt="logo" />
                <nav className={footer.footer_nav}>
                    <a href="#" className={footer.footer_link}>Готовые решения</a>
                    <a href="#" className={footer.footer_link}>О нас</a>
                    <a href="#" className={footer.footer_link}>Блог</a>
                    <a href="#" className={footer.footer_link}>Контакты</a>
                </nav>
                <span className={footer.footer_about}>© ООО «Лого», 2008—2022</span>
                <ul className={footer.footer_icons}>
                    <li>
                        <a href="#"><img src={tg} alt="tg" className={footer.footer_icon} /></a>
                    </li>
                    <li>
                        <a href="#"><img src={vk} alt="vk" className={footer.footer_icon} /></a>
                    </li>
                    <li>
                        <a href="#"><img src={tw} alt="tw" className={footer.footer_icon} /></a>
                    </li>
                    <li>
                        <a href="#"><img src={youtube} alt="youtube" className={footer.footer_icon} /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}