import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from '../components/ChannelRow';
import VideoRow from '../components/VideoRow';
import { Helmet } from 'react-helmet-async';
import { useStateValue } from '../stateProvider/StateProvider';
import useYouTubeSearch from '../hooks/useYouTubeSearch';
import useYouTubeVideos from '../hooks/useYouTubeVideos';
import useYouTubeChannels from '../hooks/useYouTubeChannels';

export default function SearchPage() {
	// eslint-disable-next-line
	const [{ term }, dispatch] = useStateValue();
	const { searchData } = useYouTubeSearch(term);
	const { videosData } = useYouTubeVideos(searchData);
	const { channelsData } = useYouTubeChannels(searchData);

	const getChannelProps = (channelId) => {
		if (channelsData.items.find((item) => item.id === channelId)) {
			return channelsData.items.find((item) => item.id === channelId);
		}
	};

	const getVideoProps = (videoId) => {
		if (videosData.items.find((item) => item.id === videoId)) {
			return videosData.items.find((item) => item.id === videoId);
		}
	};

	return (
		<div className="searchPage">
			<Helmet>
				<title>{term ? term : 'Búsqueda'} - YouTube</title>
			</Helmet>
			<div className="searchPage__filter">
				<TuneOutlinedIcon />
				<h2>Filtros</h2>
			</div>
			<hr />
			{searchData?.error ? (
				<div className="searchPage__limitExceeded">
					<h3>Se acabaron las consultas. 😅</h3>
					<h3>Vuelva a intentarlo mañana. 😊</h3>
				</div>
			) : searchData?.items && channelsData?.items && videosData?.items ? (
				<div className="seachPage__videos">
					{searchData.items.map((item) =>
						item.id.kind === 'youtube#channel' ? (
							<>
								<ChannelRow
									key={item.snippet.channelId}
									channelId={item.snippet.channelId}
									image={item.snippet.thumbnails.high.url}
									channelTitle={item.snippet.title}
									subs={
										getChannelProps(item.snippet.channelId)?.statistics
											.subscriberCount
									}
									videoCount={
										getChannelProps(item.snippet.channelId)?.statistics
											.videoCount
									}
									description={item.snippet.description}
								/>
								<hr />
								<h3 className="searchPage__mostRecent">
									Lo más reciente de {item.snippet.title}
								</h3>
							</>
						) : (
							<VideoRow
								key={item.id.videoId}
								videoId={item.id.videoId}
								image={item.snippet.thumbnails.high.url}
								duration={
									getVideoProps(item.id.videoId)?.contentDetails.duration
								}
								title={item.snippet.title.replace(/&quot;/g, '"')}
								views={getVideoProps(item.id.videoId)?.statistics.viewCount}
								timestamp={item.snippet.publishedAt}
								channelId={item.snippet.channelId}
								channelImage={
									getChannelProps(item.snippet.channelId)?.snippet.thumbnails
										.high.url
								}
								channelTitle={item.snippet.channelTitle}
								description={item.snippet.description}
								live={item.snippet.liveBroadcastContent}
							/>
						)
					)}
				</div>
			) : (
				<div className="seachPage__videos skeleton">
					<ChannelRow skeleton />
					<hr />
					<VideoRow skeleton />
					<VideoRow skeleton />
				</div>
			)}
		</div>
	);
}
