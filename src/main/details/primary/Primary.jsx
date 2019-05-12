import React from 'react';
import styled from 'styled-components';

import {
	Alcohol,
	City,
	Country,
	DryHopped,
	Extract,
	Fermentation,
	Filtration,
	Pasteurization,
	Style,
} from './fragments';

const DefinitionList = styled.dl`
	grid-column: 3 / 5;
`;

const Primary = () => (
	<DefinitionList>
		<Country />
		<City />
		<Fermentation />
		<Style />
		<Extract />
		<Alcohol />
		<Filtration />
		<Pasteurization />
		<DryHopped />
	</DefinitionList>
);

export default Primary;
