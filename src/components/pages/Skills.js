import { useEffect, useState } from 'react'

import styles from './Skills.module.css'

import SkillCard from '../skill/SkillCard'
import Loading from '../layout/Loading'

function Skills() {
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
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <section className={styles.skills_container}>
            <ul className={styles.skills_content}>
                {skills.length > 0 &&
                    skills.map((skill, key) => (
                        <SkillCard
                            name={skill.name}
                            percent={skill.percentage}
                            color={skill.color}
                            key={key} 
                            myKey={key}
                             />
                    ))}
            </ul>
            {!removeLoading && <Loading />} 
        </section>
    )
}

export default Skills