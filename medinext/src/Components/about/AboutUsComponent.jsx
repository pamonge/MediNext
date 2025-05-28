import React from 'react'
import styles from './AboutUsComponentStyles.module.css'
import drDexter from '../../assets/images/dr-dexter-pacient.jpg'
import useScrollReveal from '../../hooks/useScrollReveal'

export const AboutUsComponent = () => {
    useScrollReveal()
    return (
        <div className={`${styles.aboutContainer} reveal`}>
            <p className={styles.aboutText}>
                En <strong>Medinext</strong> Servicios Médicos nos especializamos en brindar atención médica ambulatoria en centros médicos, clinicas, consultorios particulares y a domicilio en toda la provincia de Mendoza. Nuestro objetivo es acercarte soluciones de salud de manera rápida, cómoda y segura, sin que tengas que moverte de tu hogar.
                Además, contamos con un servicio de video consultas médicas disponible las 24 horas, los 7 días de la semana, para resolver tus dudas, brindarte orientación profesional y acompañarte en todo momento.
                Confía en <strong>Medinext</strong>: atención médica de calidad, estés donde estés.
            </p>
            <img src={drDexter} alt="Dr atendiendo" className={styles.aboutImg}/>
        </div>
    )
}
