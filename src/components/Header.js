import React, { useState, useEffect } from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo.js';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../stateProvider/StateProvider';
import { actionTypes } from '../stateProvider/reducer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function Header({ handleSidebarMinimize }) {
	const lgBreakpoint = useMediaQuery('(max-width:1280px)');
	const [minimize, setMinimize] = useState(false);

	useEffect(() => {
		if (lgBreakpoint) {
			handleSidebarMinimize(lgBreakpoint);
		} else {
			if (minimize) {
				handleSidebarMinimize(minimize);
			} else {
				handleSidebarMinimize(minimize);
			}
		}
	}, [lgBreakpoint, handleSidebarMinimize, minimize]);

	const minifySidebar = () => {
		if (!lgBreakpoint) {
			if (minimize === false) {
				setMinimize(true);
			} else {
				setMinimize(false);
			}

			handleSidebarMinimize(minimize);
		}
	};

	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();

	const [inputSearch, setInputSearch] = useState('');
	const history = useHistory();

	const handleInputSearchChange = (e) => {
		setInputSearch(e.target.value);
	};

	const search = (e) => {
		e.preventDefault();

		if (inputSearch !== '') {
			dispatch({
				type: actionTypes.SET_SEARCH_TERM,
				term: inputSearch,
			});

			history.push(`/results?search_query=${inputSearch.replace(' ', '+')}`);
		}
	};

	return (
		<div className="header">
			<div className="header__left">
				<IconButton className="header__iconButton" onClick={minifySidebar}>
					<MenuIcon className="header__menuIcon" />
				</IconButton>
				<Link to="/">
					<Logo className="header__logo" />
				</Link>
				<Link to="/">
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

						<Button
							className="header__inputButton"
							type="submit"
							onClick={search}
						>
							<SearchIcon className="header__searchIcon" fontSize="small" />
						</Button>
					</div>
				</form>
				<MicIcon className="header__micIcon" />
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
