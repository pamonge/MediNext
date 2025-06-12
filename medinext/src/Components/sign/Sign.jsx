import React from 'react'
import pem from '../../assets/pem-webservice.webp'
import styles from './SignStyles.module.css'

export const Sign = () => {
  return (
    <div className={styles.container}>
        <a href="https://portfolio-pablo-monge.netlify.app/" target='_blank'>
            <img className={styles.pemImg} src={pem} alt="Pablo E. Monge Logo" />
        </a>
        <a className={styles.anchorPem} href="https://www.linkedin.com/in/pablo-esteban-monge-benavente" target='_blank'>
            <p className={styles.pemText}>
                Desarrollado por Pablo E. Monge 
            </p>
        </a>
    </div>
  )
}
