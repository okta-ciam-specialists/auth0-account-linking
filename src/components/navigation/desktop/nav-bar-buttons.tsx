import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@mui/material/Typography';
import { LoginButton, LogoutButton } from 'components';
import { SignupButton } from '../../Buttons/signup-button';

export const NavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className='nav-bar__buttons'>
			{!isAuthenticated && (
				<>
					<SignupButton />
					<LoginButton />
					<LoginButton variant='mfa' sx={{ flexWrap: 'wrap' }}>
						<div>Login</div>
						<Typography variant='subtitle1' color='white'>
							w/ MFA
						</Typography>
					</LoginButton>
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
