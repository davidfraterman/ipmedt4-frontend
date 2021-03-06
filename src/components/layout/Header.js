import React from "react";
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import styles from './Header.module.css'

const Header = () => {

    // isHamburgerMenuOpen
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = React.useState(false);
    const toggleHamburgerMenu = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    }

    return (
        <nav className={styles.nav}>
            <section className={styles.header}>
                <section>
                    <Link className={styles.header__logo} to={ROUTES.HOME}>ShintoLabs Go</Link>
                </section>
                <section className={styles.header__hamburgerMenu}>
                    <section className={styles.hamburgerMenu__icon} onClick={toggleHamburgerMenu}>
                        <Icon icon="quill:hamburger" height="30" />
                    </section>
                </section>
            </section>
            {
                isHamburgerMenuOpen && (
                <section className={styles.hamburgerMenu__links}>
                    <Icon className={styles.closeIcon} onClick={toggleHamburgerMenu} icon="codicon:chrome-close" height="40" />
                        <Link className={styles.link} to={ROUTES.HOME} onClick={toggleHamburgerMenu}>
                            <Icon icon="ant-design:home-filled" color="var(--clr-white)" height="30" />
                            Home
                        </Link>
                        <Link className={styles.link} to={ROUTES.KAART} onClick={toggleHamburgerMenu}>
                            <Icon icon="majesticons:map-marker-area" color="var(--clr-white)" height="30" />
                            Kaart
                        </Link>
                        <Link className={styles.link} to={ROUTES.TODO} onClick={toggleHamburgerMenu}>
                            <Icon icon="fa6-solid:car-side" color="var(--clr-white)" height="30" />
                            To Do
                        </Link>
                        <Link className={styles.link} to={ROUTES.LOGIN} onClick={toggleHamburgerMenu}>
                            <Icon icon="bx:log-out" color="var(--clr-white)" height="30" />
                            Uitloggen
                        </Link>
                </section>
                )
            }
         
        </nav >
    )
}

export default Header;