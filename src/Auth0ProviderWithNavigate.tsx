import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import type { AppState } from '@auth0/auth0-react';

export const Auth0ProviderWithNavigate = ({
	children,
}: React.PropsWithChildren) => {
	const navigate = useNavigate();

	const {
		VITE_AUTH0_SCOPES: scope = 'openid profile email read:current_user',
		VITE_AUTH0_DOMAIN: domain,
		VITE_AUTH0_MANAGEMENT_API_DOMAIN: API_DOMAIN,
		VITE_AUTH0_CLIENT_ID: clientId,
		VITE_AUTH0_CALLBACK_URL: redirect_uri = window.location.origin +
			'/callback',
	} = import.meta.env;

	const onRedirectCallback = (appState?: AppState) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	if (!(domain && clientId && redirect_uri)) {
		return null;
	}

	return (
		<Auth0Provider
			{...{
				domain,
				clientId,
				onRedirectCallback,
				authorizationParams: {
					audience: `https://${API_DOMAIN}/api/v2/`,
					redirect_uri,
					scope,
				},
			}}
		>
			{children}
		</Auth0Provider>
	);
};
