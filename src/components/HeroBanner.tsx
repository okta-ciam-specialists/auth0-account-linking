import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const HeroBanner = () => {
	const logo = 'https://cdn.auth0.com/blog/developer-hub/react-logo.svg';

	return (
		<Stack
			sx={{
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				background: 'var(--pink-yellow-gradient)',
				color: 'var(--black)',
				margin: '0 auto',
				padding: { xs: '3.2rem 1.6rem', sm: '3.2rem 6.4rem' },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'var(--white)',
					borderRadius: '50%',
					boxShadow: '0 2px 4px rgb(0 0 0 / 12%)',
					width: { xs: '9.6rem', sm: '12.8rem' },
					height: { xs: '9.6rem', sm: '12.8rem' },
				}}
			>
				<img className='hero-banner__image' src={logo} alt='React logo' />
			</Box>
			<Typography
				variant='h1'
				sx={{
					letterSpacing: '-1.5px',
					margin: '2.4rem 0 8px 0',
					fontSize: { xs: '3.2rem', sm: '4.8rem' },
				}}
			>
				Hello, React World!
			</Typography>
			<Typography
				sx={{
					maxWidth: '58rem',
					textAlign: 'center',
					marginBottom: '3.2rem',
					fontSize: { xs: '1.6rem', sm: '20px' },
					lineHeight: { xs: '2.4rem', sm: '3.2rem' },
				}}
			>
				This is a sample application that demonstrates the authentication flow
				for React apps using <strong>Auth0</strong>.
			</Typography>
			<Button
				variant='contained'
				color='secondary'
				href='https://auth0.com/developers/hub/code-samples/spa/react-javascript/basic-authentication-with-react-router-6'
				rel='noopener noreferrer'
				target='_blank'
				id='code-sample-link'
			>
				Check out the React code sample →
			</Button>
		</Stack>
	);
};
