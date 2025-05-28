import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonComponent } from '../ButtonComponent.jsx';


export const NavToContact = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/contact')
	}
	return (
		<>
			<ButtonComponent value='Contactenos' handleClick={handleNavigate} />
		</>
	)
}
