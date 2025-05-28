import React from 'react'
import styles from './TitleComponentStyles.module.css'
import useScrollReveal from '../hooks/useScrollReveal'


export const TitleComponent = ({value}) => {
    useScrollReveal()
    return (
        <div className={`${styles.title} reveal`}>
            <h3 className={styles.titleText}>{value}</h3>
        </div>
    )
}
