import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';

import { AuthenticationGuard, PageLoader } from 'components';

import { AdminPage } from 'pages/admin-page';
import { ProtectedPage } from 'pages/protected-page';
import { PublicPage } from 'pages/public-page';
import { CallbackPage, HomePage, NotFoundPage, ProfilePage } from 'pages';

export const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div className='page-layout'>
				<PageLoader />
			</div>
		);
	}

	return (
		<Routes>
			<Route path='/callback' element={<CallbackPage />} />
			<Route
				path='/profile'
				element={<AuthenticationGuard component={ProfilePage} />}
			/>
			<Route path='/public' element={<PublicPage />} />
			<Route
				path='/protected'
				element={<AuthenticationGuard component={ProtectedPage} />}
			/>
			<Route
				path='/admin'
				element={<AuthenticationGuard component={AdminPage} />}
			/>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
};
