import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import VideoPage from './pages/VideoPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
	const [modifySidebar, setModifySidebar] = useState(false);

	const onSidebarMini = (sidebarMini) => {
		if (sidebarMini === true) {
			setModifySidebar(true);
		} else {
			setModifySidebar(false);
		}
	};

	return (
		<HelmetProvider>
			<Helmet>
				<title>YouTube</title>
			</Helmet>
			<div className="app">
				<Router>
					<Header handleSidebarMinimize={onSidebarMini} />
					<Switch>
						<Route path="/video/:videoId">
							<div className="app__page">
								<VideoPage hideSidebar={modifySidebar} />
							</div>
						</Route>

						<Route path="/channel/:channelId">
							<div className="app__page">
								<Sidebar minimize={modifySidebar} />
								<ChannelPage />
							</div>
						</Route>

						<Route path="/results">
							<div className="app__page">
								<Sidebar minimize={modifySidebar} />
								<SearchPage />
							</div>
						</Route>

						<Route path="/">
							<div className="app__page">
								<Sidebar minimize={modifySidebar} />
								<RecommendedVideos />
							</div>
						</Route>
					</Switch>
				</Router>
			</div>
		</HelmetProvider>
	);
}