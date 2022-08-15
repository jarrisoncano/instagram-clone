import React from 'react'
import type { NextPage } from 'next'
import { Navbar } from '@/features/Navbar/'
import { Container } from '@/features/Layout/Container'

const Home: NextPage = () => {
	return (
		<Container maxWidth='970'>
			{/* Header */}
			<Navbar />
			{/* Home */}
			{/* 	Content */}
			{/* 		MainContent */}
			{/* 			stories */}
			{/* 			Posts */}
			{/* 		profile */}
			{/* 		suggestions */}
			{/* messages */}
			{/* new post */}
			{/* explorer */}
			{/* likes */}
			{/* profiles */}
		</Container>
	)
}

export default Home
