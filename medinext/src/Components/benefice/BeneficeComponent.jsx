import React from 'react'
import styles from './BeneficeComponentStyles.module.css'
import useScrollReveal from '../../hooks/useScrollReveal'
import drAmb from '../../assets/images/ambulance-service.jpeg'

export const BeneficeComponent = () => {
    useScrollReveal()
    return (
        <div className={`${styles.contentContainer} reveal`}> 
            <div>
                <img className={styles.imgBenefice} src={drAmb} alt="Dr in an ambulance" />
            </div>  
            <div className={styles.textContainer}>
                <p>
                En Medinext Salud trabajamos cada día para brindarte una experiencia médica completa, accesible y de calidad. Al formar parte de nuestra comunidad, accedés a múltiples beneficios diseñados para cuidar tu salud y la de tu familia:
                </p>
                <ul>
                    <li>Atención médica integral con todas las especialidades. Pediatría, cardiología, ginecología, Diagnostico por imagenes, odontología, entre otros.</li>
                    <li>Consultas sin coseguro en la mayoría de los servicios</li>
                    <li>Servicio de ambulancia para emergencias y urgencias</li>
                    <li>Médico a domicilio disponible las 24 horas</li>
                    <li>Videollamadas con profesionales desde la comodidad de tu hogar</li>
                    <li>Acceso a prácticas y estudios con cobertura y coseguros accesibles</li>
                </ul>
                <p>
                    Porque tu salud no puede esperar, en Medinext estamos para acompañarte siempre.
                </p>
            </div>
            
        </div>
    )
}
