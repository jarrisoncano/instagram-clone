import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '@/types/Theme'

interface Props {
	theme: ThemeType
}

export const GlobalStyle = createGlobalStyle<Props>`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #__next {
        background-color: ${({ theme }) => theme.colors.background};
        height: max-content;
    }
`
