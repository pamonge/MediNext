import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinkComponentStyles.module.css';

export const NavLinkComponent = ({ to, value, styleProp }) => {
	const className = styleProp ? styles[styleProp] : styles.navLink;

	return (
		<NavLink to={to} className={className}>
			{value}
		</NavLink>
	);
}