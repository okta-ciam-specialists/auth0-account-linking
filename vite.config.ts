/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import type { UserConfigExport } from 'vite';

export default defineConfig(({ mode }) => {
	// https://vitejs.dev/config/
	const defaultConfig: UserConfigExport = {
		plugins: [react(), tsconfigPaths()],
		build: {
			target: 'esnext',
		},
	};

	if (mode !== 'production') {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		defaultConfig.build!.minify = false;

		defaultConfig['server'] = {
			port: 3000,
		};
	}

	return defaultConfig;
});
