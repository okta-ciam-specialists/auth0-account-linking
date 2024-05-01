import '@mui/material/Button';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		login: true;
		logout: true;
		mfa: true;
		signup: true;
	}
}
