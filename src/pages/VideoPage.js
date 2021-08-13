import React from 'react';
import './VideoPage.css';
import RecommendedVideos from '../components/RecommendedVideos';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FlagIcon from '@material-ui/icons/Flag';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import useNumberFormat from '../hooks/useNumberFormat';
import Moment from 'react-moment';
import 'moment/locale/es';
import nl2br from 'react-nl2br';
import Linkify from 'react-linkify';
import { useParams } from 'react-router-dom';
import useYouTubeVideos from '../hooks/useYouTubeVideos';
import useYouTubeChannels from '../hooks/useYouTubeChannels';
import useDarkTheme from '../hooks/useDarkTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function VideoPage() {
	useDarkTheme();
	const lgBreakpoint = useMediaQuery('(max-width:1280px)');

	const { videoId } = useParams();
	const { videosData } = useYouTubeVideos(videoId, videoId);
	const { channelsData } = useYouTubeChannels(videosData);

	let views = '';
	let subs = '';

	if (channelsData?.items) {
		views = videosData.items[0].statistics.viewCount;
		subs = channelsData.items[0].statistics.subscriberCount;
	}

	const formattedViews = useNumberFormat(views);
	const formattedSubs = useNumberFormat(subs);

	return (
		<div className="videoPage">
			{videosData?.error ? (
				<div className="videoPage__limitExceeded">
					<h3>Se acabaron las consultas. 😅</h3>
					<h3>Vuelva a intentarlo mañana. 😊</h3>
				</div>
			) : channelsData?.items ? (
				<>
					<Helmet>
						<title>{videosData.items[0].snippet.title} - YouTube</title>
					</Helmet>
					<iframe
						width="100%"
						height="480"
						src={`https://www.youtube.com/embed/${videosData.items[0].id}`}
						title={videosData.items[0].snippet.title}
						frameBorder="0"
						allowFullScreen
					/>
					<div className="videoPage__body">
						<div className="videoPage__info">
							<h3>{videosData.items[0].snippet.title}</h3>
							<div className="videoPage__headline">
								<p>
									{videosData.items[0].snippet.liveBroadcastContent ===
									'live' ? (
										<>{formattedViews} personas mirando ahora</>
									) : (
										<>
											{formattedViews} vistas{' '}
											<span className="videoPage__dot">·</span>
											<Moment locale="es" fromNow>
												{videosData.items[0].snippet.publishedAt}
											</Moment>
										</>
									)}
								</p>
								<div className="videoPage__icons">
									<div>
										<ThumbUpIcon /> {videosData.items[0].statistics.likeCount}
									</div>
									<div>
										<ThumbDownIcon />{' '}
										{videosData.items[0].statistics.dislikeCount}
									</div>
									<div>
										<ReplyIcon className="videoPage__replyIcon" /> COMPARTIR
									</div>
									<div>
										<PlaylistAddIcon /> GUARDAR
									</div>
									<FlagIcon />
								</div>
							</div>
							<div className="videoPage__channelInfo">
								<Link to={`/channel/${videosData.items[0].snippet.channelId}`}>
									<Avatar
										className="videoPage__avatar"
										src={channelsData.items[0].snippet.thumbnails.default.url}
										alt={channelsData.items[0].snippet.title}
									/>
								</Link>
								<div className="videoPage__description">
									<Link
										to={`/channel/${videosData.items[0].snippet.channelId}`}
									>
										<h5 className="videoPage__channelTitle">
											{channelsData.items[0].snippet.title}
										</h5>
									</Link>
									<p className="videoPage__channelSubs">
										{formattedSubs} suscriptores
									</p>
									<p className="videoPage__videoDescription">
										<Linkify>
											{nl2br(videosData.items[0].snippet.description)}
										</Linkify>
									</p>
								</div>
							</div>
						</div>
						{!lgBreakpoint && (
							<div className="videoPage__relatedVideos">
								<RecommendedVideos related />
							</div>
						)}
					</div>
				</>
			) : (
				<div className="videoPage__circularProgress">
					<CircularProgress />
				</div>
			)}
		</div>
	);
}
