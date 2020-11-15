import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export type ModalType = {
  isOpen: boolean;
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`;

export const Image = styled.img``;

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  closed: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

export const Modal = styled.div<ModalType>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen ? modalModifiers.open() : modalModifiers.closed()};
  `}
`;

export const CloseWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.white};
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`;

export const Content = styled.div`
  ${() => css`
    width: 100%;
    max-width: 120rem;
    max-height: 80rem;
  `};
`;
