import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { NavbarProps } from './Navbar.model'
import HomeIMG from '../../assets/home.svg'

function getPosition(pos: NavbarProps['position']): React.CSSProperties {
    switch (pos) {
        case 'end':
            return {
                justifyContent: 'flex-end',
            }
        case 'center':
            return {
                justifyContent: 'center',
            }
        case 'start':
            return {
                justifyContent: 'flex-start',
            }
        default:
            return {
                justifyContent: 'flex-end',
            }
    }
}

const NavBar = ({ items, position }: NavbarProps): JSX.Element => (
    <nav className={styles.container}>
        <Link to="/" className={styles.homeIcon}>
            <img src={HomeIMG} alt="home" />
            HOME
        </Link>

        <ul className={styles.menu} style={getPosition(position)}>
            {items.map((item) => (
                <li key={item} className={styles.items}>
                    <Link to={item}>{item}</Link>
                </li>
            ))}
        </ul>
    </nav>
)

export default NavBar
