import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';

type GlobalStylesProps = {
  removeBackgroundColor?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${props => props.theme.font.family};

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBackgroundColor }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBackgroundColor &&
      css`
        background-color: ${theme.colors.secondary};
      `}

      ::-webkit-scrollbar {
        background-color: ${theme.colors.secondary};
        width: 0.8rem;
      }
      ::-webkit-scrollbar-track {
        background-color: ${theme.colors.secondary};
        border-radius: ${theme.border.radius};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.primary};
        border-radius: ${theme.border.radius};
      }
    }
  `}

`;

export default GlobalStyles;
