import React from 'react'
import type { NextPage } from 'next'
import { Theme } from '@/features/Layout/Theme'
import { Container } from '@/features/Layout/Container'

const Home: NextPage = () => {
	return (
		<Theme>
			<Container maxWidth='970'>
				{/* Header */}
				{/* Content */}
				{/* 	MainContent */}
				{/* 		stories */}
				{/* 		Posts */}
				{/* 	profile */}
				{/* 	suggestions */}
				<div>
					<h1>Hello Next.js</h1>
				</div>
				<div></div>
			</Container>
		</Theme>
	)
}

export default Home
