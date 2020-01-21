import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function Header(props: { title: string }) {
	const [show, setShow] = useState(true);
	useEffect(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			const currentScrollPos = window.pageYOffset;
			setShow(currentScrollPos < 56 || prevScrollpos > currentScrollPos);
			prevScrollpos = currentScrollPos;
		};
	}, []);

	return (
		<Root show={show}>
			<Container>
				<h1 style={{ margin: 0 }}>
					<Logo to='/'>{props.title}</Logo>
				</h1>
			</Container>
		</Root>
	);
}

// Styled Components ...
const Root = styled.header<{ show: boolean }>`
	background-color: var(--primary);
	position: fixed;
	top: ${(props: { show: boolean }) => (props.show ? 0 : -56)}px;
	width: 100%;
	display: block;
	transition: top 0.3s;
`;
const Container = styled.div`
	padding: 0 1.5rem;
	height: 56px;
	display: flex;
	align-items: center;
`;
const Logo = styled(Link)`
	font-family: var(--logo-font) !important;
	color: #fff !important;
	text-decoration: unset !important;
`;
