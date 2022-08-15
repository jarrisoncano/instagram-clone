import React from 'react'
import { NavbarStyled } from './styles'
import { NavbarMobile } from './layout/Mobile'

export const Navbar = () => {
	const isMobile = true

	return <NavbarStyled>{isMobile && <NavbarMobile />}</NavbarStyled>
}
