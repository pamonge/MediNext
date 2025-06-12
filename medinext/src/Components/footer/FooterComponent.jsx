import React from 'react'
import { ContactInfo } from './ContactInfo'
import { MapComponent } from './MapComponent'
import styles from './FooterComponentStyles.module.css'
import { SocialMediaComponent } from './SocialMediaComponent'
import { NavToContact } from '../button/buttonLogic/NavToContact.jsx'
import { Sign } from '../sign/Sign.jsx'

export const FooterComponent = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.contactData}> 
				<ContactInfo />
				<NavToContact />
				<Sign />
			</div>
			<MapComponent />
			<SocialMediaComponent />
		</div>
	)
}
