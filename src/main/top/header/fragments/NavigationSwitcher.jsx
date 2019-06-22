import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { NavigationContext } from 'config';
import { mq } from 'utils/theme';
import { More } from 'elements/icons';

const Wrapper = styled.div`
	grid-area: more;

	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Button = styled.div.attrs({
	role: 'button',
})`
	display: inline-block;
	padding: 10px;
	overflow: hidden;
	cursor: pointer;
	
	svg {
		display: block;
		width: 40px;
		height: 8px;
		opacity: 1;
		transition: opacity .2s;
	}

	&:hover svg {
		opacity: .5;
	}
`;

const NavigationSwitcher = ({ intl }) => {
	const { navbar, toggleNavbar } = useContext(NavigationContext);

	return (
		<Wrapper>
			<Button onClick={toggleNavbar}>
				<More
					title={
						intl.formatMessage({
							id: `header.${navbar ? 'close' : 'open'}Navbar`,
						})
					}
				/>
			</Button>
		</Wrapper>
	);
};

NavigationSwitcher.propTypes = {
	intl: PropTypes.shape({
		formatMessage: PropTypes.func.isRequired,
	}).isRequired,
};

export default injectIntl(NavigationSwitcher);
