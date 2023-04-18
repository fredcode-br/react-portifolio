import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'

function ProjectCard({id, name, tags, imageName, skills, mykey}) {
    return (
        <Link to={`/project/${id}`} key={mykey}>
            <li className={styles.project}>
                <img src={require(`../../img/projects/${imageName}`)} alt="project" />
                <div className={styles.project_description}>
                    <h3>{name}</h3>
                    <div className={styles.project_tags}>
                { 
                    tags.length > 0 && 
                        tags.map((tag, key) => (
                            skills.map((skill) => (
                                tag === skill.tag && 
                                <img src={require(`../../img/icons/${skill.icon}`)} alt="icon hability" key={key} />
                            ))
                    ))
                    }
                    </div>
                </div>
            </li>
        </Link>
    )
}

export default ProjectCard