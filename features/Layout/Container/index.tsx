import styled from 'styled-components'

interface Props {
	maxWidth: '970' | '820'
}

export const Container = styled.div<Props>`
	max-width: 450px;
	width: 100%;
	min-height: 100vh;
	border: 1px solid red;
	margin: 0 auto;

	@media (min-width: 450px) {
		max-width: ${({ maxWidth }) => `${maxWidth}px`};
	}
`
