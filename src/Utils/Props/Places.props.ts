import { RolesProps } from './Roles.props'

export interface PlacesProps {
  id: string
  title: string
  roles: Array<RolesProps>
  checked?: boolean
}
