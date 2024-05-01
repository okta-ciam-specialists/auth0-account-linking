import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { ContentLayout, PageLayout, ProfilePanel } from 'components';
import { useGetUser } from 'hooks';

import type { IdToken } from '@auth0/auth0-react';

export const ProfilePage = () => {
	const { getIdTokenClaims, user } = useAuth0();
	const { user: userProfile } = useGetUser();
	const theme = useTheme();
	const [idTokenClaims, setIdTokenClaims] = useState<Omit<IdToken, '__raw'>>(
		{}
	);

	if (!user) {
		return null;
	}

	useEffect(() => {
		getIdTokenClaims().then((token) => {
			const { __raw, ...claims } = token || {};

			if (claims) {
				setIdTokenClaims(claims);
			}
		});
	}, [user]);

	return (
		<PageLayout>
			<ContentLayout title='Profile Page'>
				<p id='page-description'>
					<span>
						You can use the <strong>ID Token</strong> to get the profile
						information of an authenticated user.
					</span>
					<span>
						<strong>Only authenticated users can access this page.</strong>
					</span>
				</p>
				<Stack
					id='profile-grid'
					sx={{ marginTop: { xs: '2.4rem', sm: '48px' } }}
				>
					<Grid container id='profile-header' columnGap='16px'>
						<Avatar
							src={user?.picture ?? idTokenClaims?.picture}
							sx={{
								height: { xs: '5.6rem', sm: '80px' },
								width: { xs: '5.6rem', sm: '80px' },
								border: {
									xs: 'solid 0.13rem var(--aqua)',
									sm: 'solid 2px var(--aqua)',
								},
								borderRadius: '50%',
							}}
						/>
						<Stack id='profile-headline' justifyContent='space-around'>
							<Typography
								variant='h2'
								id='profile-title'
								color='white'
								marginTop={0}
								marginBottom={0}
								sx={{
									fontSize: {
										xs: '1.6rem',
										sm: theme.typography.h2.fontSize,
									},
								}}
							>
								{user?.name}
							</Typography>
							<Typography
								id='profile-description'
								sx={{
									fontSize: {
										xs: '1.3rem',
										sm: theme.typography.body1.fontSize,
									},
								}}
							>
								{user?.email}
							</Typography>
						</Stack>
					</Grid>
					<ProfilePanel
						id='user-profile'
						title='User Profile'
						data={userProfile ?? user}
					/>
					<ProfilePanel
						id='id-token'
						title='ID Token Claims'
						data={idTokenClaims}
					/>
				</Stack>
			</ContentLayout>
		</PageLayout>
	);
};
