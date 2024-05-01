import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/1337.css';

export const CodeBlock = ({ data, title }: CodeBlockProps) => {
	data = typeof data === 'string' ? data : JSON.stringify(data);

	return (
		<Stack
			id='code-block'
			borderRadius='0.8rem'
			marginTop='3.2rem'
			overflow='hidden'
			sx={{
				backgroundColor: 'var(--dark-aluminium)',
			}}
		>
			<Typography
				id='title'
				height='4.8rem'
				color='var(--black)'
				sx={{
					backgroundColor: 'var(--aluminium)',
					fontFamily:
						'"Fira Code", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
					fontWeight: 600,
					fontSize: { xs: '1.4rem', sm: '1.6rem' },
					lineHeight: { xs: '2.2rem', sm: '2.4rem' },
					padding: '1.2rem 1.6rem',
				}}
			>
				{title}
			</Typography>
			<Box
				minHeight='32.4rem'
				sx={{
					fontSize: { xs: '1.4rem', sm: '16px' },
					lineHeight: { xs: '2.4rem', sm: '32px' },
					padding: { xs: '1.6rem', sm: '32px' },
				}}
			>
				<JSONPretty
					{...{
						id: 'json',
						data,
						mainStyle:
							'background-color:var(--dark-aluminium); overflow-x: auto; word-wrap: break-word; white-space: pre-wrap; line-height: inherit',
					}}
				/>
			</Box>
		</Stack>
	);
};

export interface CodeBlockProps {
	title: string;
	data?: string | object;
}
