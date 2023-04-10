import { FC } from 'react'

import { TextAtomProps } from './Text.props'

import * as Styled from './Text.style'

export const TextAtom: FC<TextAtomProps> = ({ children, ...rest }) => {
  return <Styled.Text {...rest}>{children}</Styled.Text>
}
