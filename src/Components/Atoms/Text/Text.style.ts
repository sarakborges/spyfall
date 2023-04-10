import styled from 'styled-components'

import { TextAtomProps } from './Text.props'

export const Text = styled.p<TextAtomProps>`
  text-align: ${({ ta }) => ta || 'left'};
  font-size: ${({ fs }) => fs || '16px'};
  font-weight: ${({ fw }) => fw || 400};
  line-height: ${({ lh }) => lh || 1};
  color: ${({ fc }) => `var(--${fc || 'text'})`};

  white-space: pre-line;
`
