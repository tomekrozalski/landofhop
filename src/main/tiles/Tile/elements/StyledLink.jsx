import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, timingFunctions } from 'utils/theme';

const bounce = () => keyframes`
	0% {
		top: -10px;
	}
	100% {
		top: 10px;
	}
`;

export default styled(Link)`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: ${({ height }) => (height || 300)}px;
	transform: scale(1);
	transition: transform ${timingFunctions.spring};
	position: relative;

	&:hover {
		transform: scale(0.9);
		z-index: 100;
	}

	svg {
		height: 30rem;
		margin: 5rem 0;

		path {
			fill: ${colors.gray[500]};
		}
	}

	.container-icon {
		position: relative;
		animation: ${bounce} .5s ease-in-out 0s infinite alternate;
	}
`;
