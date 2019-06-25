import React from 'react';
import styled from 'styled-components';

import { grid } from 'utils';
import { colors, gutters, indexes } from 'utils/theme';
import { Menu, Search } from './fragments';

const Wrapper = styled.div`
	display: block;
	width: 50%;
	height: 100vh;

	position: fixed;
	top: 0;
	right: 0;
	background: ${colors.gray[100]};

	z-index: ${indexes.navbar};
`;


const Navbar = () => (
	<Wrapper>
		{/* <LanguageMenu /> */}
		<Menu />
		{/* <Login /> */}
	</Wrapper>
);

export default Navbar;
