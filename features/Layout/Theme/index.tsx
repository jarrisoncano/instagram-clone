import React, { FC } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ThemeType } from '@/types/Theme'
import { themeConstants } from '@/utils/const/themeconstants'

interface Props {
	children: React.ReactNode
}

const lightTheme: DefaultTheme = {
	fontsize: {
		xs: '10px',
		sm: '12px',
		md: '14px',
		lg: '16px'
	},
	sizes: {
		imageCircle: '65px',
		iconSize: '24px'
	},
	colors: {
		background: '#fff',
		primaryFontColor: '#262626',
		secondaryFontColor: '#8e8e8e',
		tertiaryFontColor: '#0095f6'
	}
}

const darkTheme: DefaultTheme = {
	...lightTheme,
	colors: {
		...lightTheme.colors,
		background: '#000',
		primaryFontColor: '#fff'
	}
}

export const Theme: FC<Props> = ({ children }) => {
	const prefereredTheme: ThemeType =
		globalThis.localStorage?.getItem('theme') || themeConstants.light

	const theme =
		prefereredTheme === themeConstants.light ? lightTheme : darkTheme

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
