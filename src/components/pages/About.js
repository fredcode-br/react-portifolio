import styles from './About.module.css'

import LinkButton from '../layout/LinkButton'

import about from '../../img/about.png'

function About() {
    return (
        <section className={styles.about_container}>
            <div className={styles.about_image}>
                <img src={about} alt="developer" />
            </div>
            <div className={styles.about_text}>
                <h2>Sobre mim</h2>
                <p>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 
                    1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book.
                </p>
                <div className={styles.about_buttons}> 
                    <LinkButton to="/contact" text="Entrar em contato" />
                    <LinkButton to="https://drive.google.com/uc?id=1uAVryXTyzHCG3SuZpc2b5bMavqSjphR1&export=download" text="Baixar CV" />
                </div>
            </div>
        </section>
    )
}

export default About