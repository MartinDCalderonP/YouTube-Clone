import React from 'react';
import './VideoRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function VideoRow({
	image,
	title,
	views,
	timestamp,
	description,
	channel,
	channelImage,
}) {
	return (
		<div className="videoRow">
			<img src={image} alt={title} />
			<div className="videoRow__text">
				<h3>{title}</h3>
				<p className="videoRow__headline">
					{views} · {timestamp}
				</p>
				<div className="videoRow__channel">
					<Avatar
						className="videoRow__avatar"
						src={channelImage}
						alt={channel}
					/>
					{channel}
					<CheckCircleIcon className="videoRow__checkCircleIcon" />
				</div>
				<p className="videoRow__description">{description}</p>
				<p className="videoRow__newVideo">Nuevo</p>
			</div>
		</div>
	);
}

export default VideoRow;
