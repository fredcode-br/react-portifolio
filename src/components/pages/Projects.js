import { useEffect, useState } from 'react'

import styles from './Projects.module.css'

import Button from '../layout/Button'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

function Projects() {
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    
    useEffect(() => {
        fetch(" http://localhost:3001/skills", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSkills(data)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch(` http://localhost:3001/projects?_sort=id&_order=desc`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    const handleClick = async (e, tag) => {
        setRemoveLoading(false)
        e.preventDefault()
        try {
            await fetch(` http://localhost:3001/projects?tags_like=${tag}&_sort=id&_order=desc`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
          }).then((resp) => resp.json())
          .then((data) => {
              setProjects(data)
              setRemoveLoading(true)
          })

        }catch (err) {
            console.log(err)
        }
    }

    return (
        <section className={styles.projects_container}>  
            <div className={styles.projects_content}>
                <ul className={styles.projects_filter}>
                    <li><Button text="ALL" value="all" handleClick={handleClick} /></li>
                    { 
                        skills.map((skill, key) => (
                            <li key={key}><Button 
                            text={skill.name} 
                            value={skill.tag} 
                            myKey={key} 
                            handleClick={handleClick} /></li>
                        ))

                    }
                </ul>
                <ul className={styles.projects}>
                    {projects.length > 0 && 
                        projects.map((project, key) => (
                            <ProjectCard 
                            id = {project.id}
                            name = {project.name} 
                            tags = {project.tags}
                            imageName = {project.imageName} 
                            skills={skills} 
                            key={key} 
                            mykey={key} 
                            />
                    ))}
                </ul>
            </div>
            {!removeLoading && <Loading />} 
        </section>
    )
}

export default Projects
