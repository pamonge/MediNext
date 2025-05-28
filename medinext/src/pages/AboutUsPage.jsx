import React from 'react'
import { SpacerComponent } from '../Components/spacer/SpacerComponent'
import { AboutUsComponent } from '../Components/about/AboutUsComponent'

export const AboutUsPage = () => {
	return (
		<div>
			<SpacerComponent title='¿Quienes Somos?' />
			<AboutUsComponent />
		</div>
	)
}
