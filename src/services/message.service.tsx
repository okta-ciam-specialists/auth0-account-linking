export const getPublicResource = async () => {
	return {
		data: {
			text: 'This is a public message.',
		},
	} as ApiResponse;
};

export const getProtectedResource = async () => {
	return {
		data: {
			text: 'This is a protected message.',
		},
	} as ApiResponse;
};

export const getAdminResource = async () => {
	return {
		data: {
			text: 'This is an admin message.',
		},
	} as ApiResponse;
};

export interface ApiResponse {
	data?: {
		text: string;
	};
	error?: Error;
}
