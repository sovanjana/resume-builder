import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = (props: any) => {
	const { children } = props;
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<footer>© {new Date().getFullYear()}, Built with ❤️</footer>
		</>
	);
};

export default Layout;
