import { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

const useNumberFormat = (number) => {
	const [formattedNumber, setFormattedNumber] = useState(null);

	useEffect(() => {
		let thousandSeparator = false;
		let format = null;
		let text = 'M de';

		if (number < 1000000) {
			thousandSeparator = true;
			text = '';
		} else if (number < 10000000) {
			format = '#.#';
		} else if (number < 100000000) {
			format = '##';
		} else {
			format = '###';
		}

		setFormattedNumber(
			<>
				<NumberFormat
					value={number}
					displayType={'text'}
					thousandSeparator={thousandSeparator}
					format={format}
				/>
				{text}
			</>
		);
	}, [number]);

	return formattedNumber;
};

export default useNumberFormat;
