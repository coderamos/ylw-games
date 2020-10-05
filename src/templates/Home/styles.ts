import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
