import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import useDurationFormat from '../hooks/useDurationFormat';
import useNumberFormat from '../hooks/useNumberFormat';
import Moment from 'react-moment';
import 'moment/locale/es';

function VideoCard({
	videoId,
	image,
	duration,
	title,
	channelId,
	channelImage,
	channelTitle,
	views,
	live,
	timestamp,
	skeleton,
	related,
}) {
	const formattedDuration = useDurationFormat(duration);

	const formattedViews = useNumberFormat(views);

	return (
		<>
			{!skeleton && formattedViews ? (
				<div className={'videoCard' + (related ? ' related' : '')}>
					<Link to={`/video/${videoId}`}>
						<img className="videoCard__thumbnail" src={image} alt={title} />
						{live !== 'live' && (
							<div className="videoCard__duration">
								<Moment format="mm:ss">{formattedDuration}</Moment>
							</div>
						)}
					</Link>

					<div className={'videoCard__info' + (related ? ' related' : '')}>
						{!related && channelImage && (
							<Link
								to={`/channel/${channelId}`}
								className="videoCard__avatarLink"
							>
								<Avatar
									className="videoCard__avatar"
									src={channelImage}
									alt={channelTitle}
								/>
							</Link>
						)}
						<div className={'videoCard__text' + (related ? ' related' : '')}>
							<h4>
								<Link to={`/video/${videoId}`} className="videoCard__title">
									{title}
								</Link>
							</h4>
							<p>
								<Link
									to={`/channel/${channelId}`}
									className="videoCard__channel"
								>
									{channelTitle}
								</Link>
							</p>
							<p className="videoCard__statistics">
								{formattedViews} vistas
								{live !== 'live' && (
									<>
										<span className="videoCard__dot">·</span>
										<Moment locale="es" fromNow>
											{timestamp}
										</Moment>
									</>
								)}
							</p>
							{live === 'live' && (
								<div className="videoCard__live">EN VIVO</div>
							)}
						</div>
					</div>
				</div>
			) : (
				<div className="videoCard">
					<Skeleton variant="rect">
						<div className="videoCard__thumbnail"></div>
					</Skeleton>

					<div className="videoCard__info">
						<Skeleton className="videoCard__avatar" variant="circle">
							<Avatar className="videoCard__avatar" />
						</Skeleton>
						<div className="videoCard__text">
							<Skeleton className="videoCard__textSkeleton" variant="text" />
							<Skeleton className="videoCard__textSkeleton" variant="text" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default VideoCard;
