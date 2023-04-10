import { ComponentPropsWithoutRef } from 'react'

export type FieldAtomProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>
