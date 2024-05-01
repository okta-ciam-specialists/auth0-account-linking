import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from '../components/navigation/desktop/nav-bar';
import { MobileNavBar } from '../components/navigation/mobile/mobile-nav-bar';
import { ContentLayout, PageLayout } from 'components';

export const CallbackPage = () => {
	const { error } = useAuth0();

	if (error) {
		return (
			<PageLayout>
				<ContentLayout title='Error'>
					<p id='page-description'>
						<span>{error.message}</span>
					</p>
				</ContentLayout>
			</PageLayout>
		);
	}

	return (
		<div className='page-layout'>
			<NavBar />
			<MobileNavBar />
			<div className='page-layout__content' />
		</div>
	);
};
