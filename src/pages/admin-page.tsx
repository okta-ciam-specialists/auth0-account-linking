import { useEffect, useState } from 'react';
import { CodeBlock, PageLayout } from 'components';
import { getAdminResource } from '../services/message.service';

export const AdminPage = () => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		let isMounted = true;

		const getMessage = async () => {
			const { data, error } = await getAdminResource();

			if (!isMounted) {
				return;
			}

			if (data) {
				setMessage(JSON.stringify(data, null, 2));
			}

			if (error) {
				setMessage(JSON.stringify(error, null, 2));
			}
		};

		getMessage();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<PageLayout>
			<div className='content-layout'>
				<h1 id='page-title' className='content__title'>
					Admin Page
				</h1>
				<div className='content__body'>
					<p id='page-description'>
						<span>
							This page retrieves an <strong>admin message</strong> from an
							external API.
						</span>
						<span>
							<strong>
								Only authenticated users with the{' '}
								<code>read:admin-messages</code> permission should access this
								page.
							</strong>
						</span>
					</p>
					<CodeBlock title='Admin Message' data={message} />
				</div>
			</div>
		</PageLayout>
	);
};
