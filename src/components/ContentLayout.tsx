import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
	if (typeof title === 'string') {
		title = (
			<Typography
				variant='h1'
				id='page-title'
				sx={{ marginTop: 0, color: 'var(--white)' }}
			>
				{title}
			</Typography>
		);
	}

	return (
		<Stack
			id='content-layout'
			flex={1}
			flexDirection='column'
			flexShrink={0}
			width='100%'
			minHeight='640px'
			sx={{ padding: { xs: '1.6rem', sm: '48px' } }}
		>
			{title}
			<Box
				id='content-body'
				sx={{ fontSize: { xs: '2.4rem', sm: '1.6rem' }, lineHeight: '2.4rem' }}
			>
				{children}
			</Box>
		</Stack>
	);
};

export interface ContentLayoutProps extends React.PropsWithChildren {
	title?: string | React.ReactElement;
}
