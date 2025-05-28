import React from 'react'
import PropTypes from 'prop-types'
import styles from './CardComponentStyles.module.css'
import useScrollReveal from '../../hooks/useScrollReveal'

export const CardComponent = ({ title, content, children }) => {
  useScrollReveal()
  return (
    <div className={`${styles.cardContainer} reveal`}>
        {title && <h3 className={styles.cardTitle} >{title}</h3>}
        {Array.isArray(content) && (
			<ul className={styles.cardContent}>
				{content.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
      	)}
        {children && <div className={styles.cardChildren}>{children}</div>}
    </div>
  )
}

CardComponent.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]),
    children: PropTypes.node
  }
