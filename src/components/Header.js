import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import LogoLight from '../images/Logo Light.png';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

function Header() {
	const [inputSearch, setInputSearch] = useState('');
	const history = useHistory();

	const handleInputSearchChange = (e) => {
		setInputSearch(e.target.value);
	};

	const search = (e) => {
		e.preventDefault();

		history.push(`/results?search_query=${inputSearch}`);
	};

	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon className='header__menuIcon'/>
				<Link to='/'>
					<img className="header__logo" src={LogoLight} alt="Logo de Youtube" />
				</Link>
				<Link to='/'>
					<sup className="header__sup">AR</sup>
				</Link>
			</div>

			<div className="header__center">
				<form className="header__form">
					<div className="header__input">
						<input
							value={inputSearch}
							onChange={handleInputSearchChange}
							placeholder="Buscar"
							type="text"
						/>

						<Button className="header__inputButton" type="submit" onClick={search}>
							<SearchIcon className="header__searchIcon" fontSize='small' />
						</Button>
					</div>
				</form>

				<MicIcon className='header__micIcon'/>
			</div>

			<div className="header__right">
				<VideoCallIcon className="header__rightIcon" />
				<AppsIcon className="header__rightIcon" />
				<NotificationsIcon className="header__rightIcon" />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
