import React, { useContext } from 'react'
import { InfoContext } from '../../context/InfoContext.jsx'
import styles from './ContactInfoStyles.module.css'

export const ContactInfo = () => {
	const { infoData } = useContext(InfoContext);

	const contactMedia = infoData.find(item => item.title === 'Medios de Contacto');

	if(!contactMedia) return null;

	return (
		<div className={styles.contactContainer}>
			<h3>{contactMedia.title}</h3>
			{contactMedia.content.map((item, index) => (
				<p key={index}>{item}</p>			
			))}
		</div>
	)
}
