import styled, { css } from 'styled-components'

import { ButtonAtomProps } from './Button.props'

const PrimaryButton = css`
  background-color: var(--primaryButtonBackground);

  color: var(--primaryButtonTextColor);

  transition: box-shadow 0.3s, background-color 0.3s;

  &:not(:disabled):hover {
    box-shadow: 0 1px 8px -2px var(--primaryButtonShadow);
  }

  &:disabled {
    cursor: default;
    background-color: var(--primaryButtonDisabledBackground);
  }
`

export const Button = styled.button<ButtonAtomProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: ${({ nopad }) => (nopad ? '0' : '8px')};

  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '8px')};

  font-size: 16px;
  letter-spacing: inherit;

  cursor: pointer;

  ${({ primary, secondary }) => (primary || !secondary) && PrimaryButton}
`
