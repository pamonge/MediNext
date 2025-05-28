import React from 'react'
import styles from './StaffComponentStyles.module.css'
import drOp from '../../assets/images/dr-operation.jpg'
import useScrollReveal from '../../hooks/useScrollReveal'

export const StaffComponent = () => {
    useScrollReveal()
    return (
        <div className={styles.contentContainer}>  
            <img className={`${styles.staffImg} reveal`} src={drOp} alt="Dr. operating" />
            <div className={`${styles.staffText} reveal`}>
                <p>
                    En Medinext Salud contamos con un equipo de profesionales altamente capacitados y comprometidos con el bienestar de cada paciente. Nuestro staff está conformado por médicos especialistas, personal administrativo y técnicos que trabajan día a día con vocación, ética y calidez humana.
                </p>
                <p>
                    Creemos en una atención personalizada, cercana y basada en la confianza. Nos esforzamos por ofrecer un servicio de salud integral, donde cada integrante del equipo cumple un rol fundamental para brindarte la mejor experiencia posible.
                </p>
            </div>
        </div>

    )
    }
