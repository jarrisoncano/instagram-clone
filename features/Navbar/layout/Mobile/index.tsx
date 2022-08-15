import React from 'react'
import { NavbarMobileStyled } from './styles'
import { CameraIcon } from '@/assets/icons/navbar/CameraIcon'
import { MessageIcon } from '@/assets/icons/navbar/MessageIcon'
import { InstagramIcon } from '@/assets/icons/navbar/InstagramIcon'

export const NavbarMobile = () => {
	return (
		<NavbarMobileStyled>
			<CameraIcon />
			<InstagramIcon />
			<MessageIcon />
		</NavbarMobileStyled>
	)
}
