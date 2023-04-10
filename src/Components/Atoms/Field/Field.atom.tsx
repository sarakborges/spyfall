import { FC } from 'react'

import { FieldAtomProps } from './Field.props'

import * as Styled from './Field.style'

export const FieldAtom: FC<FieldAtomProps> = ({ label, ...props }) => {
  const { id, type } = props

  return (
    <Styled.FieldWrapper>
      <input {...props} type={type || 'text'} />

      {id && label && (
        <Styled.Label htmlFor={id}>
          <>{label}</>
        </Styled.Label>
      )}
    </Styled.FieldWrapper>
  )
}
