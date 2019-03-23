import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'utils/theme';

const Logomark = ({ color }) => {
	const actualColor = color || colors.gray[700];

	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 670">
			<title lang="en">Land of Hop</title>
			<path fill={actualColor} d="M335 50c38.5 0 75.8 7.5 110.9 22.4 33.9 14.4 64.4 34.9 90.6 61.1s46.7 56.7 61.1 90.6C612.5 259.2 620 296.5 620 335s-7.5 75.8-22.4 110.9c-14.4 33.9-34.9 64.4-61.1 90.6 -26.2 26.2-56.7 46.7-90.6 61.1C410.8 612.5 373.5 620 335 620s-75.8-7.5-110.9-22.4c-33.9-14.4-64.4-34.9-90.6-61.1 -26.2-26.2-46.7-56.7-61.1-90.6C57.5 410.8 50 373.5 50 335s7.5-75.8 22.4-110.9c14.4-33.9 34.9-64.4 61.1-90.6s56.7-46.7 90.6-61.1C259.2 57.5 296.5 50 335 50M335 0C150 0 0 150 0 335s150 335 335 335 335-150 335-335S520 0 335 0L335 0z" />
			<circle fill={actualColor} cx="193" cy="171" r="35" />
			<circle fill={actualColor} cx="193" cy="279" r="25" />
		</svg>
	);
};

Logomark.propTypes = {
	color: PropTypes.string,
};

Logomark.defaultProps = {
	color: null,
};

export default Logomark;
