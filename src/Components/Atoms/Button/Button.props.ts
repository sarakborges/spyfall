import { ComponentPropsWithoutRef } from 'react'

export interface ButtonAtomProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean
  secondary?: boolean
  transparent?: boolean
  round?: boolean
  nopad?: boolean
}
