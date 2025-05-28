import React from 'react'
import styles from './ProductComponentStyles.module.css'
import useScrollReveal from '../../hooks/useScrollReveal'
import medicalPlan from '../../assets/images/medical-plan.jpeg'
import { infoData } from '../../context/InfoData'

export const ProductComponent = () => {
    useScrollReveal()
    const planesData = infoData.find(item => item.title === "Planes");
    return (
        <div className={`${styles.productContainer} reveal`}>
            <div className={styles.textContainer}>
                <p className={styles.productText}>
                    En Medinext Servicios Médicos contamos con distintos planes diseñados para adaptarse a las necesidades de cada paciente y familia.
                    Ofrecemos:

                    Planes individuales: ideales para quienes buscan atención médica personalizada en su hogar o mediante video consulta 24/7.

                    Planes familiares: pensados para proteger a todos los miembros de la familia con cobertura médica a domicilio y acceso ilimitado a consultas virtuales.

                    Planes corporativos: destinados a empresas que buscan cuidar la salud de sus empleados, con atención médica preventiva, control ambulatorio y asistencia remota permanente.
                </p>
                <h3 className={styles.planTitle}>Plan Mediplus 60+</h3>
                <ul className={styles.planDetail}>
                    {planesData.mediplus.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h3 className={styles.planTitle}>Plan Jubilados</h3>
                <ul className={styles.planDetail}>
                    {planesData.plan2.map((item, index) => (
                        <li key={index}>{item}</li> 
                    ))}
                </ul>
            </div>
            <div>
                <img src={medicalPlan} alt="Medical plan" className={styles.medicalPlanImg}/>
            </div>
        </div>
    )
}
