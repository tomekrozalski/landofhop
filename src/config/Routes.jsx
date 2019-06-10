import React, { Suspense, lazy, useContext } from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	__RouterContext,
} from 'react-router-dom';
import NProgress from 'nprogress';
import { isDate } from 'lodash';
import { useTransition } from 'react-spring';

import { Header, Loginbar, Navbar } from 'main/top';
import { GlobalStyle } from 'utils/theme';
import { ContentWrapper, ErrorMessage, Spinner } from 'elements';
import { AuthenticationContext, NavigationContext } from './index';

export const AddNewBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/AddNewBeverage').finally(NProgress.done);
});

export const UpdateBeverage = lazy(() => {
	NProgress.start();
	return import('../dashboard/UpdateBeverage').finally(NProgress.done);
});

export const Contact = lazy(() => {
	NProgress.start();
	return import('../main/contact/Contact').finally(NProgress.done);
});

export const Details = lazy(async () => {
	NProgress.start();
	return import('../main/details/Details').finally(NProgress.done);
});

export const NotFound = lazy(() => {
	NProgress.start();
	return import('../main/notFound/NotFound').finally(NProgress.done);
});

export const Tiles = lazy(async () => {
	NProgress.start();
	return import('../main/tiles/Tiles').finally(NProgress.done);
});

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { token, tokenExpiration } = useContext(AuthenticationContext);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (token && isDate(tokenExpiration)) {
					return <Component {...props} />;
				}

				if (token === null) {
					return <Spinner center />;
				}

				return <Redirect to="/" />;
			}}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.node.isRequired,
};

function useRouter() {
	return useContext(__RouterContext);
}

const Routes = () => {
	const { loginbar, navbar } = useContext(NavigationContext);
	// const location = useRouter();

	// console.log('location', location);

	const transition = useTransition(loginbar && navbar, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
		<Router>
			<>
				{/* <Navbar /> */}
				{/* { transition
					.map(({ item, key, props }) => item && <Loginbar key={key} style={props} />)
				} */}
				<Header />
				<ContentWrapper>
					<Suspense fallback={<Spinner center />}>
						<Switch>
							<Route path="/" exact component={Tiles} />
							<Route path="/details/:shortId/:brand/:badge" exact component={Details} />
							<Route path="/contact" exact component={Contact} />
							<PrivateRoute path="/add-new-beverage" exact component={AddNewBeverage} />
							<PrivateRoute path="/update-beverage/:shortId/:brand/:badge" exact component={UpdateBeverage} />
							<Route component={NotFound} />
						</Switch>
					</Suspense>
				</ContentWrapper>
				<ErrorMessage />
				<GlobalStyle />
			</>
		</Router>
	);
};

export default Routes;
