import styled, { css } from 'styled-components';

import { RadioProps } from '.';

type LabelProps = Pick<RadioProps, 'labelColor'>;
type ColorStyleProps = Pick<RadioProps, 'colorStyle'>;

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`;

export const Input = styled.input<ColorStyleProps>`
  ${({ theme, colorStyle }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors[colorStyle!]};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors[colorStyle!]};
    }

    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors[colorStyle!]};
      opacity: 0;
      transition: opacity ${theme.transition.fast};
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor = 'white' }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor]};
    line-height: 1;
    cursor: pointer;
  `}
`;
