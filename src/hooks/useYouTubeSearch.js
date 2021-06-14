import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const useYouTubeSearch = (term, channelId) => {
	const [searchData, setSearchData] = useState(null);

	useEffect(() => {
		let mounted = true;

		let params = '';

		if (term !== null) {
			params = `&q=${term}`;
		} else {
			params = `&order=date&channelId=${channelId}`;
		}

		const fetchSearchData = async () => {
			fetch(
				`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=AR${params}&key=${API_KEY}`
			)
				.then((res) => res.json())
				.then((result) => {
					if (mounted) {
						setSearchData(result);
					}
				});
		};

		fetchSearchData();
		return () => {
			mounted = false;
		};
	}, [term, channelId]);

	return { searchData };
};

export default useYouTubeSearch;
