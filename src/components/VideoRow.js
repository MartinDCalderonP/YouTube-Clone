import React from 'react';
import { Link } from 'react-router-dom';
import './VideoRow.css';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import useDurationFormat from '../hooks/useDurationFormat';
import useNumberFormat from '../hooks/useNumberFormat';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/es';

function VideoRow({
	videoId,
	image,
	duration,
	title,
	views,
	timestamp,
	channelId,
	channelImage,
	channelTitle,
	description,
	live,
	skeleton,
}) {
	const formattedDuration = useDurationFormat(duration);
	const formattedViews = useNumberFormat(views);

	const fromToday = (timestamp) => {
		let today = moment(Date.now());

		if (today.isSame(timestamp, 'd')) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<>
			{!skeleton && formattedViews ? (
				<div className="videoRow">
					<Link to={`/video/${videoId}`}>
						<img className="videoRow__thumbnail" src={image} alt={title} />
						{live !== 'live' && (
							<div className="videoRow__duration">
								<Moment format="mm:ss">{formattedDuration}</Moment>
							</div>
						)}
					</Link>
					<div className="videoRow__info">
						<Link to={`/video/${videoId}`}>
							<h3>{title}</h3>
						</Link>
						<p className="videoRow__headline">
							{live === 'live' ? (
								<>{formattedViews} lo están viendo</>
							) : (
								<>
									{formattedViews} vistas{' '}
									<span className="videoRow__dot">·</span>
									<Moment locale="es" fromNow>
										{timestamp}
									</Moment>
								</>
							)}
						</p>
						<div className="videoRow__channel">
							<Link to={`/channel/${channelId}`}>
								<Avatar
									className="videoRow__avatar"
									src={channelImage}
									alt={channelTitle}
								/>
							</Link>
							<Link to={`/channel/${channelId}`}>
								<span className="videoRow__channelTitle">{channelTitle}</span>
							</Link>
						</div>
						<p className="videoRow__description">{description}</p>
						{live === 'live' ? (
							<div className="videoRow__live">EN VIVO</div>
						) : (
							fromToday(timestamp) && (
								<p className="videoRow__newVideo">Nuevo</p>
							)
						)}
					</div>
				</div>
			) : (
				<div className="videoRow">
					<Skeleton variant="rect">
						<div className="videoRow__thumbnail"></div>
					</Skeleton>

					<div className="videoRow__info">
						<Skeleton className="videoRow__skeletonText" variant="text" />
						<Skeleton className="videoRow__skeletonText" variant="text" />
						<div className="videoRow__channelSkeleton">
							<Skeleton className="videoRow__avatar" variant="circle">
								<Avatar className="videoRow__avatar" />
							</Skeleton>
							<Skeleton className="videoRow__skeletonText" variant="text" />
						</div>
						<Skeleton className="videoRow__skeletonText" variant="text" />
						<Skeleton className="videoRow__skeletonText" variant="text" />
					</div>
				</div>
			)}
		</>
	);
}

export default VideoRow;
