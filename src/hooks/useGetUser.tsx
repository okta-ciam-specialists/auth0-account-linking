import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import type { User } from '@auth0/auth0-react';
import type { Enrollment } from 'auth0';

const {
	VITE_AUTH0_DOMAIN: DOMAIN,
	// VITE_AUTH0_MANAGEMENT_API_DOMAIN: DOMAIN,
	VITE_AUTH0_SCOPES: scope = 'openid profile email read:current_user',
} = import.meta.env;

export const useGetUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userProfile, setUserProfile] = useState<UserProfile | undefined>();
	const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();

	const baseURL = `https://${DOMAIN}/api/v2`;

	useEffect(() => {
		if (isAuthenticated && user?.sub) {
			const getUser = async () => {
				const access_token = await getAccessTokenSilently();

				if (access_token) {
					const { data: profile } = await axios<UserProfile>({
						baseURL,
						url: `/users/${user.sub}`,
						headers: { Authorization: `Bearer ${access_token}` },
					});

					const { data: multifactor = [] } = await axios<Enrollment[]>({
						baseURL,
						url: `/users/${user.sub}/enrollments`,
						headers: { Authorization: `Bearer ${access_token}` },
					});

					return { ...profile, multifactor };
				}
			};

			if (!isLoading) {
				setIsLoading(true);
			}

			getUser()
				.then((user) => setUserProfile(() => user))
				.finally(() => setIsLoading(false));
		}
	}, [isAuthenticated, user?.sub]);

	return { isLoading, user: userProfile };
};

export interface UserProfile extends User {
	app_metadata?: Record<string, unknown>;
	user_metadata?: Record<string, unknown>;
}
