import React from 'react'
import styles from './ModalComponentStyles.module.css'
import { ButtonComponent } from '../button/ButtonComponent'
import { useNavigate } from 'react-router-dom'

export const ModalComponent = ({ icon, text }) => {
    const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/')
    }
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <img className={styles.modalIcon} src={icon} alt="icon" />
                <div className={styles.textContainer}>
                    <p className={styles.modalText}>{text}</p>
                    <div className={styles.button}>
                        <ButtonComponent value='Cerrar' handleClick={handleNavigate} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
