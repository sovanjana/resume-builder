import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default function Footer(props: { title: string }) {
	return (
		<StyledFooter>
			<Container>
				<Logo to='/'>{props.title}</Logo>
				<Content></Content>
			</Container>
			<Copyright>© {new Date().getFullYear()}, Built with ❤️</Copyright>
		</StyledFooter>
	);
}

// Styled Components ...
const StyledFooter = styled.footer`
	background-color: var(--primary);
	padding: 0 1.5rem;
`;
const Container = styled.div`
	padding: 1rem 0;
`;
const Logo = styled(Link)`
	color: #fff !important;
	text-decoration: unset !important;
	font-family: var(--logo-font) !important;
	font-size: 32px;
`;
const Content = styled.div``;
const Copyright = styled.p`
	position: relative;
	font-size: 12px;
	font-family: 'Fahkwang', sans-serif;
	font-weight: 500;
	text-align: center;
	line-height: 2;
	margin: 0;
	::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.5);
		width: 100%;
	}
`;
