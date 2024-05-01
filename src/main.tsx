import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { App } from 'app';
import { Auth0ProviderWithNavigate } from './Auth0ProviderWithNavigate';
import './styles/styles.css';
import theme from 'styles/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<ThemeProvider {...{ theme }}>
			<BrowserRouter>
				<Auth0ProviderWithNavigate>
					<App />
				</Auth0ProviderWithNavigate>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
