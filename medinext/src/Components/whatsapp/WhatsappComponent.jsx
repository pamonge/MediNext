import React from 'react'
import whatsApp from '../../assets/icons/whatsApp.png'
import styles from './WhatsappComponentStyles.module.css'

export const WhatsappComponent = () => {
  return (
    <div>
        <a
        href="https://wa.me/5492617459941"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsAppIcon}
        >
           <img src={whatsApp} alt="Whatsapp icon" /> 
        </a>
    </div>
  )
}
