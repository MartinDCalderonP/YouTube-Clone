import { useState, useEffect } from 'react';

// Themes on App.css

const useDarkTheme = () => {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const currentTheme = window.localStorage.getItem('theme');
		if (currentTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			setChecked(true);
		}
	}, []);

	const switchTheme = () => {
		if (checked === false) {
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.setAttribute('data-theme', 'dark');
			setChecked(true);
		} else {
			window.localStorage.setItem('theme', 'light');
			document.documentElement.removeAttribute('data-theme');
			setChecked(false);
		}
	};

	return { checked, switchTheme };
};

export default useDarkTheme;
