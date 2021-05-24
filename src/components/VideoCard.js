import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function VideoCard({
	image,
	title,
	channelImage,
	channel,
	verified,
	views,
	timestamp,
}) {
	return (
		<div className="videoCard">
			<img className="videoCard__thumbnail" src={image} alt={title} />
			<div className="videoCard__info">
				<Avatar
					className="videoCard__avatar"
					src={channelImage}
					alt={channel}
				/>
				<div className="videoCard__text">
					<h4>{title}</h4>
					<p>
						{channel} {verified && <CheckCircleIcon className='videoCard__checkCircleIcon' />}
					</p>
					<p>
						{views} · {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
