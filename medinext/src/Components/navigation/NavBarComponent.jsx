import React, { useState } from 'react'
import styles from './NavBarComponentStyles.module.css'
import mediNextLogo from '../../assets/mediNextLogo.jpeg'
import { NavLinkComponent } from './NavLinkComponent'
import { Menu, X } from 'lucide-react'

export const NavBarComponent = () => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { to: '/', value: 'Inicio', styleProp: 'navLinkInit'},
        { to: '/about', value: '¿Quienes Somos?', styleProp: ''},
        { to: '/staff', value: 'Staff', styleProp: ''},
        { to: '/product', value: 'Planes', styleProp: ''},
        { to: '/benefice', value: 'Beneficios', styleProp: ''},
        { to: '/contact', value: 'Contacto', styleProp: ''},
        { to: '/work', value: 'Trabaja con Nosotros', styleProp: ''},
    ]

    return (
        <div className={styles.container}> 
            <img src={mediNextLogo} className={styles.mediNextLogo}/>
            <div className={styles.hamburger} onClick={toggleMenu}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
            
            <ul className={`${styles.navItemsList} ${menuOpen? styles.open : ''}`}>
                {navItems.map(( item, index) => (
                    <li key={index} className={styles.navItem}>
                        <NavLinkComponent to={item.to} value={item.value} styleProp={item.styleProp}/>
                    </li>
                ))}
            </ul>           
        </div>
    )
}
