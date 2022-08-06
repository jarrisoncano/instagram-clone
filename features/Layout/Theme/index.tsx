import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

interface Props {
	children: React.ReactNode
}

const lightTheme = {
	// colors
	colors: {
		primary: '#0070f3',
		secondary: '#f3f3f3',
		tertiary: '#f3f3f3',
		quaternary: '#f3f3f3',
		quinary: '#f3f3f3',
		senary: '#f3f3f3',
		septenary: '#f3f3f3',
		octonary: '#f3f3f3',
		nonary: '#f3f3f3'
	}
}

export const Theme: FC<Props> = ({ children }) => {
	return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}
