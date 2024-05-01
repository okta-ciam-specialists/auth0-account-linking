import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../../Buttons/LoginButton';
import { LogoutButton } from '../../Buttons/LogoutButton';
import { SignupButton } from '../../Buttons/signup-button';

export const MobileNavBarButtons = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className='mobile-nav-bar__buttons'>
			{!isAuthenticated && (
				<>
					<SignupButton />
					<LoginButton />
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
