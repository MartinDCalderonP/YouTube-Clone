import React from 'react';
import './RecommendedVideos.css';
import Chip from '@material-ui/core/Chip';
import VideoCard from './VideoCard';
import useYouTubeVideos from '../hooks/useYouTubeVideos';
import useYouTubeChannels from '../hooks/useYouTubeChannels';

function RecommendedVideos({ related }) {
	const { videosData } = useYouTubeVideos();
	const { channelsData } = useYouTubeChannels(videosData);

	let chipsKeywords = [
		'Todos',
		'En tiempo real',
		'Listas de reproducción',
		'Ciencia ficción',
		'Cumbias',
		'Personajes',
		'Tráiler',
		'Música',
		'Premier League',
	];

	if (related) {
		chipsKeywords = chipsKeywords.slice(0, 3);
	}

	const getChannelImage = (channelId) => {
		return channelsData.items.find((item) => item.id === channelId).snippet
			.thumbnails.default.url;
	};

	let skeletons = [];

	for (let i = 0; i < 12; i++) {
		skeletons.push(<VideoCard skeleton />);
	}

	return (
		<div className="recommendedVideos">
			<div
				className={'recommendedVideos__chipsDiv' + (related ? ' related' : '')}
			>
				<div className="recommendedVideos__chipsList">
					{chipsKeywords?.map((chipKeyword) => (
						<Chip
							key={chipKeyword}
							className="recommendedVideos__chip"
							variant="outlined"
							label={chipKeyword}
						/>
					))}
				</div>
			</div>

			{videosData?.error ? (
				<div className="recommendedVideos__limitExceeded">
					<h3>Se acabaron las consultas. 😅</h3>
					<h3>Vuelva a intentarlo mañana. 😊</h3>
				</div>
			) : channelsData?.items ? (
				<div
					className={'recommendedVideos__videos' + (related ? ' related' : '')}
				>
					{videosData?.items.map((item) => (
						<VideoCard
							related={related}
							key={item.id}
							videoId={item.id}
							image={item.snippet.thumbnails.medium.url}
							duration={item.contentDetails.duration}
							title={item.snippet.title}
							channelId={item.snippet.channelId}
							channelImage={getChannelImage(item.snippet.channelId)}
							channelTitle={item.snippet.channelTitle}
							views={item.statistics.viewCount}
							live={item.snippet.liveBroadcastContent}
							timestamp={item.snippet.publishedAt}
						/>
					))}
				</div>
			) : (
				<div className="recommendedVideos__videos skeleton">
					{skeletons.map((item) => item)}
				</div>
			)}
		</div>
	);
}

export default RecommendedVideos;
