import { Auth0Features } from '../components/auth0-features';
import { HeroBanner, PageLayout } from '../components';

export const HomePage = () => (
	<PageLayout>
		<HeroBanner />
		<Auth0Features />
	</PageLayout>
);
