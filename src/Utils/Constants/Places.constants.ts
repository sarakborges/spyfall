import { PlacesProps } from '@/Utils/Props'

export const PLACES: Array<PlacesProps> = [
  {
    id: 'beach',
    title: 'Praia',

    roles: [
      {
        id: 'role1',
        title: 'Role 1',
        isUnique: true
      },

      {
        id: 'role2',
        title: 'Role 2',
        isUnique: false
      }
    ]
  },

  {
    id: 'police-station',
    title: 'Delegacia de polícia',

    roles: [
      {
        id: 'role1',
        title: 'Role 1',
        isUnique: true
      },

      {
        id: 'role2',
        title: 'Role 2',
        isUnique: false
      }
    ]
  },

  {
    id: 'space-station',
    title: 'Estação espacial',

    roles: [
      {
        id: 'role1',
        title: 'Role 1',
        isUnique: true
      },

      {
        id: 'role2',
        title: 'Role 2',
        isUnique: false
      }
    ]
  },

  {
    id: 'polar-station',
    title: 'Estação polar',

    roles: [
      {
        id: 'role1',
        title: 'Role 1',
        isUnique: true
      },

      {
        id: 'role2',
        title: 'Role 2',
        isUnique: false
      }
    ]
  }
]
