import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileMenuToggleButton } from './mobile-menu-toggle-button';
import { MobileNavBarBrand } from './mobile-nav-bar-brand';
import { MobileNavBarButtons } from './mobile-nav-bar-buttons';
import { MobileNavBarTabs } from './mobile-nav-bar-tabs';

export const MobileNavBar = () => {
	const [mobileMenuState, setMobileMenuState] = useState<'closed' | 'open'>(
		'closed'
	);
	const [mobileMenuIcon, setMobileMenuIcon] = useState<'close' | 'menu'>(
		'menu'
	);

	const isMobileMenuOpen = () => {
		return mobileMenuState === 'open';
	};

	const closeMobileMenu = () => {
		document.body.classList.remove('mobile-scroll-lock');
		setMobileMenuState('closed');
		setMobileMenuIcon('menu');
	};

	const openMobileMenu = () => {
		document.body.classList.add('mobile-scroll-lock');
		setMobileMenuState('open');
		setMobileMenuIcon('close');
	};

	const toggleMobileMenu = () => {
		if (isMobileMenuOpen()) {
			closeMobileMenu();
		} else {
			openMobileMenu();
		}
	};

	return (
		<div className='mobile-nav-bar__container'>
			<nav className='mobile-nav-bar'>
				<MobileNavBarBrand handleClick={closeMobileMenu} />
				<MobileMenuToggleButton
					icon={mobileMenuIcon === 'close' ? <CloseIcon /> : <MenuIcon />}
					handleClick={toggleMobileMenu}
				/>

				{isMobileMenuOpen() && (
					<div className='mobile-nav-bar__menu'>
						<MobileNavBarTabs handleClick={closeMobileMenu} />
						<MobileNavBarButtons />
					</div>
				)}
			</nav>
		</div>
	);
};
