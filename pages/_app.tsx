import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/globals'
import { Theme } from '@/features/Layout/Theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<GlobalStyle />
			<Component {...pageProps} />
		</Theme>
	)
}

export default MyApp
