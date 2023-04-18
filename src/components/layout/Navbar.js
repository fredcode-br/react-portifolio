import {Link} from 'react-router-dom'

import {  FaHome, FaPencilRuler, FaUserAlt, FaThLarge, FaPhoneAlt } from 'react-icons/fa'

import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
                <ul className={styles.list}> 
                    <li className={`${styles.item} `}><Link to="/"> <FaHome/> </Link></li>
                    <li className={`${styles.item} `}><Link to="/skills"> <FaPencilRuler /> </Link></li>
                    <li className={`${styles.item} `}> <Link to="/about"> <FaUserAlt /> </Link> </li>
                    <li className={`${styles.item} `}> <Link to="/projects"> < FaThLarge/> </Link> </li>
                    <li className={`${styles.item} `}> <Link to="/contact"> < FaPhoneAlt /> </Link> </li>
                </ul>
        </nav>
    )
}

export default Navbar