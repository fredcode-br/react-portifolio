import { useState } from 'react'
import emailjs from '@emailjs/browser'

import styles from './Contact.module.css'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();
        
        if(name === "" || email === "" || message === ""){
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_3lpnuif", "template_6jepylq", templateParams, "fBJaEiYaoyBqw747_")
        .then((response)=> {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName("")
            setEmail("")
            setMessage("")
        }, (err) => { 
            console.log("Erro: ",err)
        })
    }

    return (
        <section className={styles.contact_container}>
            <h1>Formulário de Contato</h1>
            <form className={styles.form} onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    placeholder="Digite a mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <input
                    className={styles.input_submit}
                    type="submit"
                />



            </form>


        </section>
    )
}

export default Contact