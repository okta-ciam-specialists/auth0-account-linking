import { withAuthenticationRequired } from '@auth0/auth0-react';
import { PageLayout, PageLoader } from 'components';

export const AuthenticationGuard = ({
	component,
}: AuthenticationGuardProps) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => (
			<PageLayout id='page-loader-layout'>
				<PageLoader />
			</PageLayout>
		),
	});

	return <Component />;
};

export interface AuthenticationGuardProps {
	component: React.ComponentType;
}
