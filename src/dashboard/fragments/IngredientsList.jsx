import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FastField } from 'formik';
import { get } from 'lodash';
import { FormattedMessage } from 'react-intl';

import {
	ConditionalLabel,
	InputWrapper,
	LabelWrapper,
	StyledSelect,
} from 'dashboard/elements';
import { fragmentTypes } from './utils';

const IngredientsList = ({
	fieldName,
	formName,
	ingredients,
	isError,
	isLoading,
}) => (
	<>
		<LabelWrapper>
			<FastField
				component={ConditionalLabel}
				formName={formName}
				name={fieldName}
				reset={[]}
			>
				<FormattedMessage id={`dashboard.${fieldName}`} />
			</FastField>
		</LabelWrapper>
		<InputWrapper place="wide">
			<FastField
				component={StyledSelect}
				formName={formName}
				isError={isError}
				isLoading={isLoading}
				multi
				name={fieldName}
			>
				{ ingredients }
			</FastField>
		</InputWrapper>
	</>
);

IngredientsList.propTypes = {
	...fragmentTypes,
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	isError: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	ingredients: get(state, 'dashboard.lists.ingredients.values', []),
	isError: get(state, 'dashboard.lists.ingredients.isError', false),
	isLoading: get(state, 'dashboard.lists.ingredients.isLoading', false),
});

export default connect(mapStateToProps)(IngredientsList);
