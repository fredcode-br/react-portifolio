import {Link} from 'react-router-dom'

import {  FaGithub, FaLinkedin, FaInstagram  } from 'react-icons/fa'

import styles from './Home.module.css'

import LinkButton from '../layout/LinkButton'

import user from '../../img/user.png'

function Home() {
    return (
        <section className={styles.home_container}>  
            <div className={styles.home_text}>
                <div className={styles.text_content}>
                    <h1>Fred <br></br> Rufino</h1>
                    <p>I'm Web Developer</p>
                    <div className={styles.link_buttons}> 
                        <LinkButton to="/projects" text="Ver Projetos" />
                        <LinkButton to="https://drive.google.com/uc?id=1uAVryXTyzHCG3SuZpc2b5bMavqSjphR1&export=download" text="Baixar CV" />
                    </div>
                    <div className={styles.home_icons}>
                        <Link to="https://github.com/frederico-rufino"> <FaGithub /> </Link>
                        <Link to="https://www.linkedin.com/in/fred-diniz/"> <FaLinkedin /> </Link>
                        <Link to="https://www.instagram.com/fred_drufino/"> <FaInstagram /> </Link>                
                    </div>
                </div>
            </div>
            <div className={styles.home_image}>
                <div className={styles.circle}>
                    <img src={user} alt="developer" />
                </div>
            </div>
            
            
        </section>

    )
}

export default Home