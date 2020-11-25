import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      background: ${theme.colors.white};
      padding: ${theme.spacings.medium};
      color: ${theme.colors.black};
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xsmall} 0;

      ${HeadingStyles.headingModifiers.lineLeft(theme, 'primary')};

      ${media.greaterThan('medium')`
        color: ${theme.colors.black};
      `}
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};
    }

    a {
      color: ${theme.colors.primary};
    }

    img {
      width: 100%;
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`;

export const Content = styled.div`
  ${() => css``}
`;
