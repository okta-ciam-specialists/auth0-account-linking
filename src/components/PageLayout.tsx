import Stack from '@mui/material/Stack';
import { NavBar } from './navigation/desktop/nav-bar';
import { MobileNavBar } from './navigation/mobile/mobile-nav-bar';
import { PageFooter } from './page-footer';

import type { StackProps } from '@mui/material';

export const PageLayout = ({
	InnerStackProps,
	sx,
	...props
}: PageLayoutProps) => {
	const { children } = props || {};
	return (
		<Stack
			{...{
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				...props,
			}}
		>
			<NavBar />
			<MobileNavBar />
			<Stack
				{...{
					flex: 1,
					flexBasis: 'auto',
					flexShrink: 0,
					width: '100%',
					...InnerStackProps,
					sx: {
						marginTop: { xs: '6.4rem', sm: '8rem' },
						maxWidth: '120rem',
						...InnerStackProps?.sx,
					},
				}}
			>
				{children}
			</Stack>
			<PageFooter />
		</Stack>
	);
};

export interface PageLayoutProps extends StackProps {
	InnerStackProps?: StackProps;
}
