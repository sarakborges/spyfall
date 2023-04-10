import { FC } from 'react'

import { ButtonAtomProps } from './Button.props'

import * as Styled from './Button.style'

export const ButtonAtom: FC<ButtonAtomProps> = ({ children, ...props }) => {
  const { type } = props

  return (
    <Styled.Button {...props} type={type || 'button'}>
      {children}
    </Styled.Button>
  )
}
