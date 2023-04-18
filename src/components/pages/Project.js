import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './Project.module.css'

import LinkButton from '../layout/LinkButton'
import Loading from '../layout/Loading'

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:3001/projects/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [id])
    
    return (
        <section className={styles.project_container}>
            
            {!removeLoading ? <Loading /> : 
            <>
                <div className={styles.project_description}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <div className={styles.project_buttons}>
                        <LinkButton to={project.projectUrl} text="Ver Projeto" />
                        <LinkButton to={project.githubUrl} text="Ver Código" />
                    </div>
                </div>
                
                <div className={styles.project_image}>
                    <img src={require(`../../img/projects/${project.imageName}`)} alt="project" />
                </div>
            </>
            }
        </section>
    )
}

export default Project