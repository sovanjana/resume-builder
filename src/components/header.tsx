import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Header = (props: { siteTitle: string }) => {
	return (
		<Root
			style={{
				marginBottom: `1.45rem`
			}}
		>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `1.45rem 1.0875rem`
				}}
			>
				<h1 style={{ margin: 0 }}>
					<Link
						to='/'
						style={{
							color: `white`,
							textDecoration: `none`
						}}
					>
						{props.siteTitle}
					</Link>
				</h1>
			</div>
		</Root>
	);
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;

const Root = styled.header`
	background-color: royalblue;
	font-family: var(--logo-font) !important;
`;
