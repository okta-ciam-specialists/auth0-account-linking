import kebabCase from 'lodash/kebabCase';
import { Box } from '@mui/material';

import { CodeBlock } from './CodeBlock';

import type { BoxProps } from '@mui/material';

export const ProfilePanel = ({
	title = 'Data',
	data,
	...props
}: ProfilePanelProps) => {
	return (
		<Box {...{ id: `profile-panel__${kebabCase(title)}`, ...props }}>
			<CodeBlock {...{ data, title }} />
		</Box>
	);
};

export interface ProfilePanelProps extends BoxProps {
	title?: string;
	data?: string | object;
}
