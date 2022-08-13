import 'styled-components'
import { themeConstants } from '@/utils/const/themeconstants'

export type ThemeType = themeConstants.light | themeConstants.dark

declare module 'styled-components' {
	export interface DefaultTheme {
		fontsize: {
			xs: string
			sm: string
			md: string
			lg: string
		}
		sizes: {
			imageCircle: string
			iconSize: string
		}
		colors: {
			background: string
			primaryFontColor: string
			secondaryFontColor: string
			tertiaryFontColor: string
		}
	}
}
