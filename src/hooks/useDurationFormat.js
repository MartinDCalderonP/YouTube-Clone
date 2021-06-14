import { useState, useEffect } from 'react';
import moment from 'moment';

const useNumberFormat = (duration) => {
	const [formattedDuration, setFormattedDuration] = useState(null);

	useEffect(() => {
		let seconds = moment.duration(duration).asSeconds();
		setFormattedDuration(moment.utc(seconds * 1000));
	}, [duration]);

	return formattedDuration;
};

export default useNumberFormat;
