import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector = '.reveal', options = {}) => {
	useEffect(() => {
		ScrollReveal().reveal(selector, {
			duration: 1000,
			origin: 'bottom',
			distance: '50px',
			reset: true,
			...options,
		});
	}, []);
};

export default useScrollReveal;