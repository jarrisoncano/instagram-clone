import React from 'react'
import styled from 'styled-components'
import instagramURL from '@/assets/img/instagram.png'

const SpanStyled = styled.span`
	display: flex;
	width: 103px;

	img {
		height: 100%;
		width: 100%;
	}
`

export const InstagramIcon: any = () => {
	return (
		<SpanStyled>
			<img src={instagramURL.src} alt='' />
		</SpanStyled>
	)
}
