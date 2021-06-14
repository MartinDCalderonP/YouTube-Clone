import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const useYouTubeVideos = (searchData, id) => {
	const [videosData, setVideosData] = useState(null);

	useEffect(() => {
		let mounted = true;

		let params = '&id=';

		if (searchData?.items) {
			searchData.items.map((item) => (params += item.id.videoId + ','));
		} else if (id) {
			params += id;
		} else {
			params = '&chart=mostPopular';
		}

		const fetchVideosData = async () => {
			fetch(
				`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails${params}&maxResults=20&regionCode=AR&key=${API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					if (mounted) {
						setVideosData(result);
					}
				});
		};

		fetchVideosData();
		return () => {
			mounted = false;
		};
	}, [searchData, id]);

	return { videosData };
};

export default useYouTubeVideos;
