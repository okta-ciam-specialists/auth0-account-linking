import { NavLink } from 'react-router-dom';

export const MobileNavBarTab = ({
	path,
	label,
	handleClick,
}: MobileNavBarTabProps) => {
	return (
		<NavLink
			onClick={handleClick}
			to={path}
			end
			className={({ isActive }) =>
				'mobile-nav-bar__tab ' + (isActive ? 'mobile-nav-bar__tab--active' : '')
			}
		>
			{label}
		</NavLink>
	);
};

export interface MobileNavBarTabProps {
	path: string;
	label: string;
	handleClick: React.MouseEventHandler;
}
