import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';

export const callExternalApi = async (options: {
	config: AxiosRequestConfig;
}) => {
	try {
		const { data } = await axios<{ message?: string }>(options.config);

		return {
			data,
			error: null,
		};
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error;

			const { data, statusText } = axiosError?.response || {};

			let message = 'http request failed';

			if (statusText) {
				message = statusText;
			}

			if (axiosError.message) {
				message = axiosError.message;
			}

			if (data?.message) {
				message = data.message;
			}

			return {
				data: null,
				error: {
					message,
				},
			};
		}

		return {
			data: null,
			error: {
				message: (error as Error).message,
			},
		};
	}
};
