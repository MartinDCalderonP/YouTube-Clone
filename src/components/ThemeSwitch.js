import React from 'react';
import './ThemeSwitch.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useDarkTheme from '../hooks/useDarkTheme';

function ThemeSwitch() {
	const { checked, switchTheme } = useDarkTheme();

	return (
		<div className="themeSwitch">
			<FormControlLabel
				control={<Switch checked={checked} onChange={switchTheme} />}
				label="Tema Claro / Oscuro"
			/>
		</div>
	);
}

export default ThemeSwitch;
