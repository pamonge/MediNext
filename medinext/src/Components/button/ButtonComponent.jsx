import React from 'react'
import styles from '../button/ButtonComponentStyles.module.css'

export const ButtonComponent = ({ value, handleClick }) => {
	return (
		<button className={styles.button} onClick={ handleClick }>
			{value}
		</button>
	)
}
