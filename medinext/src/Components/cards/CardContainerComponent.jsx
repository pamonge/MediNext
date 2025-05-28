import React from 'react'
import styles from './CardContainerComponentStyles.module.css'
import { CardComponent } from './CardComponent'
import { useInfo } from '../../context/InfoContext'

export const CardContainerComponent = () => {
    const { infoData } = useInfo();
    const filteredData = infoData.filter(item => item.title !== 'Planes');
    return (
        <div className={styles.cardComponentContainer}>
            {filteredData.map((item, index) => (
                <CardComponent key={index} title={item.title} content={item.content} /> 
            ))}
        </div>
    )
}
