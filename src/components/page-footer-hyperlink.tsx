export const PageFooterHyperlink = ({
	children,
	path,
}: PageFooterHyperlinkProps) => {
	return (
		<a
			className='page-footer__hyperlink'
			href={path}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</a>
	);
};

export interface PageFooterHyperlinkProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	path: string;
}
