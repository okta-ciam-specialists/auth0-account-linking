/// <reference types="vite/client" />

interface ImportMetaEnv {
	/**
	 * If a custom domain has been configured for the tenant, set that value here. Otherwise, use the `Domain` value found in the application settings.
	 */
	readonly VITE_AUTH0_DOMAIN: string;
	readonly VITE_AUTH0_CLIENT_ID: string;
	/**
	 * Required if `VITE_AUTH0_DOMAIN` is set to use the tenant's custom domain.
	 *
	 * This is always the "default" tenant domain and is necessary in order to utilize the Management API.
	 */
	readonly VITE_AUTH0_MANAGEMENT_API_DOMAIN?: string;
	/**
	 * If set to `"true"` then the `Login w/ MFA` button will be shown in the nav bar. Else, it will not.
	 *
	 * @default "false"
	 */
	readonly VITE_MFA_ENABLED?: string;
}
