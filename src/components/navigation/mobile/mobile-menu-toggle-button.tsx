export const MobileMenuToggleButton = ({
	icon,
	handleClick,
}: MobileMenuToggleButtonProps) => {
	return (
		<span
			className='mobile-nav-bar__toggle material-icons'
			id='mobile-menu-toggle-button'
			onClick={handleClick}
		>
			{icon}
		</span>
	);
};

export interface MobileMenuToggleButtonProps {
	icon: React.ReactElement;
	handleClick: React.MouseEventHandler;
}
