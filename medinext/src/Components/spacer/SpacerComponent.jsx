import React from 'react'
import styles from './SpacerComponentStyles.module.css'

export const SpacerComponent = ({ title }) => {
	return (
		<div className={styles.spacerContainer}>
			<div className={styles.titleContainer}>
				<h2 className={styles.spacerTitle}>{title}</h2>
			</div>
		</div>
	)
}
