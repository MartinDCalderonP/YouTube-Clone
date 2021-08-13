import React, { useState } from 'react';
import './ChannelPage.css';
import { Helmet } from 'react-helmet-async';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
import VideoCard from '../components/VideoCard';
import useNumberFormat from '../hooks/useNumberFormat';
import { useParams } from 'react-router-dom';
import useYouTubeChannels from '../hooks/useYouTubeChannels';
import useYouTubeSearch from '../hooks/useYouTubeSearch';
import useYouTubeVideos from '../hooks/useYouTubeVideos';

export default function ChannelPage() {
	const { channelId } = useParams();
	const { channelsData } = useYouTubeChannels(channelId);
	const { searchData } = useYouTubeSearch(null, channelId);
	const { videosData } = useYouTubeVideos(searchData);

	const formattedSubs = useNumberFormat(
		channelsData?.items[0].statistics.subscriberCount
	);

	const [tab, setTab] = useState(1);

	const handleTabsChange = (e, newTab) => {
		setTab(newTab);
	};

	let skeletons = [];

	for (let i = 0; i < 12; i++) {
		skeletons.push(<VideoCard skeleton />);
	}

	return (
		<div className="channelPage">
			{channelsData?.error ? (
				<div className="channelPage__limitExceeded">
					<h3>Se acabaron las consultas. 😅</h3>
					<h3>Vuelva a intentarlo mañana. 😊</h3>
				</div>
			) : channelsData?.items ? (
				<>
					<Helmet>
						<title>{channelsData.items[0].snippet.title} - YouTube</title>
					</Helmet>
					<div
						className="channelPage__cover"
						style={{
							backgroundImage: `url(${channelsData.items[0].brandingSettings.image.bannerExternalUrl})`,
						}}
					/>
					<div className="channelPage__header">
						<div className="channelPage__info">
							<Avatar
								className="channelPage__avatar"
								src={channelsData.items[0].snippet.thumbnails.medium.url}
								alt={channelsData.items[0].snippet.title}
							/>
							<div className="channelPage__title">
								<h2>{channelsData.items[0].snippet.title}</h2>
								<p className="channelPage__subs">
									{formattedSubs} suscriptores
								</p>
							</div>
						</div>
						<div className="channelPage__tabsDiv">
							<Tabs
								className="channelPage__tabsList"
								value={tab}
								onChange={handleTabsChange}
								centered
							>
								<Tab label="Página Principal" />
								<Tab label="Videos" />
								<Tab label="Listas de Reproducción" />
								<Tab label="Comunidad" />
								<Tab label="Canales" />
								<Tab label="Acerca de" />
							</Tabs>
						</div>
					</div>
				</>
			) : (
				<div className="channelPage__circularProgress">
					<CircularProgress />
				</div>
			)}

			{videosData?.error ? (
				<div className="channelPage__limitExceeded">
					<h3>Se acabaron las consultas. 😅</h3>
					<h3>Vuelva a intentarlo mañana. 😊</h3>
				</div>
			) : videosData?.items ? (
				<div className="channelPage__videos">
					{videosData.items.map((item) => (
						<VideoCard
							key={item.id}
							videoId={item.id}
							image={item.snippet.thumbnails.medium.url}
							duration={item.contentDetails.duration}
							title={item.snippet.title}
							channelId={item.snippet.channelId}
							views={item.statistics.viewCount}
							live={item.snippet.liveBroadcastContent}
							timestamp={item.snippet.publishedAt}
						/>
					))}
				</div>
			) : (
				<div className="channelPage__videos">
					{skeletons.map((item) => item)}
				</div>
			)}
		</div>
	);
}