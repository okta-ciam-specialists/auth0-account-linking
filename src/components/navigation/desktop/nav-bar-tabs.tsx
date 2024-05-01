import { useAuth0 } from '@auth0/auth0-react';
import { NavBarTab } from './nav-bar-tab';

export const NavBarTabs = () => {
	const { isAuthenticated } = useAuth0();

	const tabs = [
		{
			path: '/profile',
			label: 'Profile',
			isSecure: true,
		},
		{
			path: '/public',
			label: 'Public',
		},
		{
			path: '/protected',
			label: 'Protected',
			isSecure: true,
		},
		{
			path: '/admin',
			label: 'Admin',
			isSecure: true,
		},
	];

	return (
		<div className='nav-bar__tabs'>
			{tabs.map(({ path, label, isSecure = false }) => {
				if (!isSecure || (isSecure && isAuthenticated)) {
					return <NavBarTab {...{ key: `${label}-tab`, label, path }} />;
				}
				return <></>;
			})}
		</div>
	);
};
