import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import useNumberFormat from '../hooks/useNumberFormat';

function ChannelRow({
	channelId,
	image,
	channelTitle,
	subs,
	videoCount,
	description,
	skeleton,
}) {
	const formattedSubs = useNumberFormat(subs);
	const formattedVideoCount = useNumberFormat(videoCount);

	return (
		<>
			{!skeleton && formattedVideoCount ? (
				<div className="channelRow">
					<Link to={`/channel/${channelId}`}>
						<Avatar
							className="channelRow__avatar"
							src={image}
							alt={channelTitle}
						/>
					</Link>
					<Link to={`/channel/${channelId}`}>
						<div className="channelRow__text">
							<h3>{channelTitle}</h3>
							<p className="channelRow__statistics">
								{formattedSubs} suscriptores
								<span className="channelRow__dot">·</span>
								{formattedVideoCount} videos
							</p>
							<p>{description}</p>
						</div>
					</Link>
				</div>
			) : (
				<div className="channelRow">
					<Skeleton className="channelRow__avatar" variant="circle">
						<Avatar className="channelRow__avatar" />
					</Skeleton>
					<div className="channelRow__text">
						<Skeleton className="channelRow__textSkeleton" variant="text" />
						<Skeleton className="channelRow__textSkeleton" variant="text" />
						<Skeleton className="channelRow__textSkeleton" variant="text" />
						<Skeleton className="channelRow__textSkeleton" variant="text" />
					</div>
				</div>
			)}
		</>
	);
}

export default ChannelRow;
