import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

import type { ButtonProps } from '@mui/material/Button';

const mfaAcr = 'http://schemas.openid.net/pape/policies/2007/06/multi-factor';

export const LoginButton = ({ children = 'Login', ...props }: ButtonProps) => {
	const { loginWithRedirect } = useAuth0();

	const handleLogin = async () => {
		await loginWithRedirect({
			authorizationParams: {
				screen_hint: props?.variant === 'signup' ? 'signup' : undefined,
				acr_values: props?.variant === 'mfa' ? mfaAcr : undefined,
			},
			appState: {
				returnTo: '/profile',
			},
		});
	};

	return (
		<Button variant='login' onClick={handleLogin} {...props}>
			{children}
		</Button>
	);
};
