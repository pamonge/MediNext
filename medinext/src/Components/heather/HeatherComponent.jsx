import React, { useContext } from 'react'
import styles from './HeatherComponentStyles.module.css'
import clock from '../../assets/icons/clock.png'
import emailImg from '../../assets/icons/email.png'
import phone from '../../assets/icons/phone.png'
import { InfoContext } from '../../context/InfoContext'

export const HeatherComponent = () => {
	const { infoData } = useContext(InfoContext)
	const workTime = infoData.find(info => info.title === 'Nuestros Horarios')
	const contact = infoData.find(info => info.title === 'Medios de Contacto');
	const email = contact?.content.find(linea => linea.toLowerCase().startsWith('email:'))?.split(':')[1]?.trim();
	const phoneNum = contact?.content.find(line => line.toLowerCase().startsWith('telefono:'))?.split(':')[1]?.trim();
	return (
		<div className={styles.heatherContainer}>
			<div className={styles.clockContainer}>
				<img src={clock} alt="Clock" className={styles.heatherClock}/>
				<p className={styles.heatherText}>{workTime && workTime.content.map((item, index) => (
						<React.Fragment key={index}>
						{item}
						{index < workTime.content.length - 1 && ' '}
					  </React.Fragment> 
				))}</p>
			</div>
			<div className={styles.emailContainer}>
				<img src={emailImg} alt="email" className={styles.heatherEmail}/>
				<p className={styles.heatherText}>{email}</p>
			</div>
			<div className={styles.phoneContainer}>
				<img src={phone} alt="Phone" className={styles.heatherPhone}/>
				<p className={styles.heatherText}>{phoneNum}</p>
			</div>
		</div>
	)
}
