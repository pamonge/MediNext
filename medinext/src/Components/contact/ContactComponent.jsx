import React from 'react'
import styles from './ContactComponentStyles.module.css'
import draOutside from '../../assets/images/dra-outside.jpg'
import { FormComponent } from '../form/FormComponent'
import useScrollReveal from '../../hooks/useScrollReveal'

export const ContactComponent = () => {
    useScrollReveal()
    return (
        <div className={`${styles.contactContainer} reveal`}>
            <FormComponent />
            <div className={styles.textContainer}>
                <p className={styles.contactText}>
                    Nuestro equipo está disponible para responder tus consultas, brindarte información sobre nuestros servicios o ayudarte a coordinar una atención médica. No dudes en comunicarte con nosotros. ¡Estamos para ayudarte!
                </p>
                <img className={styles.contactImg} src={draOutside} alt="Dra. stands outdoors" />
            </div>
        </div> 
    )
}
