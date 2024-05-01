import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';
import { LoginButton, LogoutButton } from 'components';
import { SignupButton } from '../../Buttons/signup-button';

const { VITE_MFA_ENABLED: MFA_ENABLED } = import.meta.env;

export const NavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	const mfaEnabled = MFA_ENABLED == 'true' || false;

	return (
		<div className='nav-bar__buttons'>
			{!isAuthenticated && (
				<>
					<SignupButton />
					<LoginButton />
					{mfaEnabled && (
						<LoginButton variant='mfa' sx={{ flexWrap: 'wrap' }}>
							<div>Login</div>
							<Typography variant='subtitle1' color='white'>
								w/ MFA
							</Typography>
						</LoginButton>
					)}
				</>
			)}
			{isAuthenticated && (
				<>
					<LogoutButton />
				</>
			)}
		</div>
	);
};
