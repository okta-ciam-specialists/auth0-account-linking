import { createTheme } from '@mui/material';

import type { ThemeOptions } from '@mui/material';

const commonTypographyHeader = {
	fontFamily: 'var(--font-secondary)',
	fontWeight: 600,
	color: 'rgba(0, 0, 0, 0.86)',
	marginBottom: '1.6rem',
};

const muiTheme: ThemeOptions = {
	breakpoints: {
		values: {
			xs: 0,
			sm: 541,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	components: {
		MuiButtonBase: {
			styleOverrides: {
				root: {
					boxShadow: 'none !important',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				containedSecondary: {
					backgroundColor: 'var(--white)',
					color: 'var(--black)',
					':hover': {
						background: 'rgba(255, 255, 255, 0.85)',
					},
				},
				root: ({ theme }) => ({
					border: 0,
					borderRadius: '0.8rem',
					color: 'var(--white)',
					cursor: 'pointer',
					fontFamily: 'var(--font-primary)',
					fontWeight: 600,
					textTransform: 'none',
					transition: 'background 0.3s ease-out, color 0.3s ease-out',
					userSelect: 'none',
					fontSize: '1.6rem',
					lineHeight: '2.4rem',
					minWidth: '10rem',
					padding: '1.6rem 1.6rem',
					[theme.breakpoints.down('sm')]: {
						fontSize: '1.3rem',
						lineHeight: '2.2rem',
						minWidth: '0.8rem',
						padding: '1rem 1.2rem',
					},
				}),
				containedPrimary: {
					backgroundColor: 'var(--indigo)',
					':hover': {
						background: 'rgba(99, 93, 255, 0.85)',
					},
				},
			},
			variants: [
				{
					props: { variant: 'login' },
					style: ({ theme }) => ({
						minWidth: '8.4rem',
						border: '0.1rem solid var(--indigo)',
						color: 'var(--white)',
						background: 'var(--indigo)',
						width: '50%',
						marginRight: '1.6rem',
						fontFamily: 'var(--font-primary)',
						fontStyle: 'normal',
						fontWeight: 600,
						borderRadius: '0.8rem',
						textAlign: 'center',
						cursor: 'pointer',
						userSelect: 'none',
						transition: 'background 0.3s ease-out, color 0.3s ease-out',
						fontSize: '1.6rem',
						lineHeight: '3.2rem',
						padding: '0.8rem 0rem',
						':last-child': {
							marginRight: 0,
						},
						[theme.breakpoints.up('sm')]: {
							fontSize: '1.4rem',
							lineHeight: '1.6rem',
							padding: '0.8rem 1.2rem',
						},
					}),
				},
				{
					props: { variant: 'mfa' },
					style: ({ theme }) => ({
						minWidth: '8.4rem',
						border: '0.1rem solid var(--indigo)',
						color: 'var(--white)',
						background: 'var(--indigo)',
						width: '50%',
						marginRight: '1.6rem',
						fontFamily: 'var(--font-primary)',
						fontStyle: 'normal',
						fontWeight: 600,
						borderRadius: '0.8rem',
						textAlign: 'center',
						cursor: 'pointer',
						userSelect: 'none',
						transition: 'background 0.3s ease-out, color 0.3s ease-out',
						fontSize: '1.6rem',
						lineHeight: '3.2rem',
						padding: '0.8rem 0rem',
						':last-child': {
							marginRight: 0,
						},
						[theme.breakpoints.up('sm')]: {
							fontSize: '1.4rem',
							lineHeight: '1.6rem',
							padding: '0.8rem 1.2rem',
						},
					}),
				},
				{
					props: { variant: 'signup' },
					style: {
						minWidth: '8.4rem',
						border: '0.1rem solid var(--white)',
						color: 'var(--white)',
						background: 'transparent',
						width: '50%',
						marginRight: '1.6rem',
						fontFamily: 'var(--font-primary)',
						fontStyle: 'normal',
						fontWeight: 500,
						borderRadius: '0.8rem',
						textAlign: 'center',
						cursor: 'pointer',
						userSelect: 'none',
						':last-child': {
							marginRight: 0,
						},
						sx: {
							fontSize: { xs: '1.4rem', sm: '1.6rem' },
							lineHeight: { xs: '1.6rem', sm: '3.2rem' },
							padding: { xs: '0.8rem 1.2rem', sm: '0.8rem 0' },
						},
					},
				},
			],
		},
		MuiSelect: {
			defaultProps: {
				sx: {
					fontFamily: 'inherit',
					fontSize: 'inherit',
					lineHeight: 'inherit',
				},
			},
		},
	},
	typography: {
		fontSize: 10,
		fontFamily: 'var(--font-primary)',
		h1: { ...commonTypographyHeader, marginTop: '3.2rem', fontSize: '3.2rem' },
		h2: { ...commonTypographyHeader, marginTop: '3.2rem', fontSize: '2.8rem' },
		h3: { ...commonTypographyHeader, marginTop: '3.2rem', fontSize: '2.4rem' },
		h4: { ...commonTypographyHeader, marginTop: '1.6rem', fontSize: '2rem' },
		h5: { ...commonTypographyHeader, marginTop: '1.6rem', fontSize: '1.6rem' },
		h6: { ...commonTypographyHeader, marginTop: '1.6rem', fontSize: '1.4rem' },
		body1: {
			margin: '0 0 1.6rem',
			fontSize: '1.6rem',
		},
	},
};

export default createTheme(muiTheme);
