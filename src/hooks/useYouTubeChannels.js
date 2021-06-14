import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const useYouTubeChannels = (idsData) => {
	const [channelsData, setChannelsData] = useState(null);

	useEffect(() => {
		let mounted = true;

		let params = '&id=';

		if (idsData?.items) {
			idsData.items.map((item) => (params += item.snippet.channelId + ','));
		} else {
			params += idsData;
		}

		const fetchChannelsData = async () => {
			fetch(
				`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings${params}&key=${API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					if (mounted) {
						setChannelsData(result);
					}
				});
		};

		fetchChannelsData();
		return () => {
			mounted = false;
		};
	}, [idsData]);

	return { channelsData };
};

export default useYouTubeChannels;
