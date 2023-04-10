import styled from 'styled-components'

export const HomeTemplate = styled.div`
  display: flex;
  flex-flow: column;
  gap: 64px;
  flex: 1;

  max-width: 480px;
  min-height: 100vh;
  margin: auto;
  padding: 16px;

  background-color: var(--containerBg);
`

export const Participants = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`

export const ParticipantsList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

export const PlayerItem = styled.div`
  display: flex;
  gap: 8px;

  > span {
    display: flex;
    place-content: center;
    place-items: center;
  }

  > div {
    flex: 1;
  }

  > button {
    > svg {
      width: 16px;
    }
  }
`

export const EnoughPlayers = styled.div`
  display: flex;
  flex-flow: column;
  gap: 32px;
`

export const NewGame = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`

export const PlayerRoles = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;
`

export const PlayerRolesList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

export const PlayerButton = styled.div`
  > button {
    width: 100%;
  }
`

export const Places = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`
export const PlacesList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

export const PlaceItem = styled.div`
  > div {
    flex-flow: row;

    input {
      height: auto;
    }
  }
`
