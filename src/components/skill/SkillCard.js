import React from 'react'
import styles from './SkillCard.module.css'

function SkillCard({name, color, percent, mykey}) {
    return (
        <li className={styles.skill} key={mykey}>
            <p>{name}</p>
            <div className={styles.bar} style={{ border: `2px solid ${color}` }}>
                <div className={styles.progress} style={{ width: `${percent}%`, backgroundColor: `${color}` }}></div>
            </div>
        </li>
    )
}

export default SkillCard