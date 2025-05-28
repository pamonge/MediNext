import React from 'react'
import styles from './SocialMediaComponentStyles.module.css'
import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'

export const SocialMediaComponent = () => {
	return (
		<div className={styles.socialMediaContainer}>
			<div> 
				<a href="https://www.instagram.com/medinextserviciosmedicos/" target='_blank'>
					<img src={instagram} alt="Instagram" className={styles.socialMediaIcon}/>
				</a>
			</div>
			<div>
				<a href="https://www.facebook.com/pablo.lucero.186590/" target='_blank'>
					<img src={facebook} alt="Facebook" className={styles.socialMediaIcon}/>
				</a>	
			</div>
		</div>
	)
}
