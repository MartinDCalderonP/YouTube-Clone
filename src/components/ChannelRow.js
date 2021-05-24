import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({ image, channel, verified, subs, videos, description}) {
	return (
		<div className="channelRow">
			<Avatar className="channelRow__logo" src={image} alt={channel} />
			<div className="channelRow__text">
				<h4>
					{channel} {verified && <CheckCircleIcon className='channelRow__checkCircleIcon' />}
				</h4>
				<p>
					{subs} · {videos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
