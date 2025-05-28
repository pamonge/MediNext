import React from 'react'
import styles from './MapComponentStyles.module.css'

export const MapComponent = () => {
    return (
        <div className={styles.mapContainer}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.0844251626!2d-68.84499732508439!3d-32.89593604302728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0910e7339c19%3A0xe8b803214ec00bbf!2sAv.%20Col%C3%B3n%20136%2C%20M5500CUL%20Mendoza!5e0!3m2!1ses!2sar!4v1746867110350!5m2!1ses!2sar" 
            className={styles.iframe}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}
