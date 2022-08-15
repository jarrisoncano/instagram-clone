import styled from 'styled-components'

export const NavbarStyled = styled.nav`
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 0.15rem solid ${({ theme }) => theme.colors.border};
	height: 2.75rem;
	width: 100%;
`
