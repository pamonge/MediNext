import React from 'react'
import styles from './WorkWithUsComponentStyles.module.css'
import useScrollReveal from '../../hooks/useScrollReveal'


export const WorWithUsComponent = () => {
    useScrollReveal()
    return (
        <div className={`${styles.textContainer} reveal`}>
            <p className={styles.text}>
                En <strong>Medinext</strong> creemos que la salud comienza con un equipo comprometido, humano y apasionado por el cuidado de los demás. Si compartís nuestra vocación de servicio y buscás un entorno donde puedas crecer profesionalmente mientras marcás una diferencia real en la vida de las personas, ¡queremos conocerte!

                Sumate a nuestro equipo multidisciplinario y colaborá en un ambiente de respeto, aprendizaje continuo e innovación en el cuidado de la salud.
            </p>
            <div className={styles.cvMail}>
                <p className={styles.text}>
                    Envia tu CV a medinext.postulaciones@gmail.com haciendo click  en el botón.
                </p>
                <a href="mailto:medinext.postulaciones@gmail.com?subject=Envío de CV&body=Adjunto mi CV para su consideración.">
                    <button className={styles.cvButton}>Enviar CV</button>
                </a>
            </div>
        </div>
    )
}
