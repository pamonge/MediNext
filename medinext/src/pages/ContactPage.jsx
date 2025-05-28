import React from 'react'
import { SpacerComponent } from '../Components/spacer/SpacerComponent'
import useScrollReveal from '../hooks/useScrollReveal'
import { ContactComponent } from '../Components/contact/ContactComponent'

export const ContactPage = () => {
	useScrollReveal()
  return (
		<div>
			<SpacerComponent title='Contacto' />
			<ContactComponent />
		</div>
	)
}
