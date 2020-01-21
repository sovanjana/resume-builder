import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

import './layout.css';

const Layout: React.FC = props => {
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
		<Fragment>
			<Header title={data.site.siteMetadata.title} />
			<MainContainer>{props.children}</MainContainer>
			<Footer title={data.site.siteMetadata.title} />
		</Fragment>
	);
};

export default Layout;

const MainContainer = styled.main`
	margin-top: 56px;
	min-height: 100vh;
`;
