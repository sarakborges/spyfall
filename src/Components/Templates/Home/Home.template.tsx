import {
  FC,
  useState,
  useContext,
  useEffect,
  ChangeEvent,
  FormEvent
} from 'react'
import { Plus, Trash } from '@styled-icons/typicons'

import { AppContext } from '@/Contexts'

import { PLACES } from '@/Utils/Constants'
import { PlacesProps, RolesProps } from '@/Utils/Props'

import { ButtonAtom, FieldAtom, TextAtom } from '@/Components/Atoms'

import * as Styled from './Home.style'

export const HomeTemplate: FC = () => {
  const { appState, setAppState } = useContext(AppContext)
  const { players, place } = appState

  const [newPlayer, setNewPlayer] = useState<string>('')
  const [spiesQuantity, setSpiesQuantity] = useState<number>(1)
  const [possiblePlaces, setPossiblePlaces] = useState<Array<PlacesProps>>([])

  const changeNewPlayerName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPlayer(e.currentTarget.value)
  }

  const changeSpiesQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setSpiesQuantity(parseInt(e.currentTarget.value))
  }

  const changePossiblePlaces = (e: ChangeEvent<HTMLInputElement>) => {
    setPossiblePlaces([
      ...possiblePlaces.map((possiblePlaceItem) =>
        possiblePlaceItem.id === e.currentTarget.id
          ? { ...possiblePlaceItem, checked: !possiblePlaceItem.checked }
          : { ...possiblePlaceItem }
      )
    ])
  }

  const changeCurrentPlayer = (val: string, id: number) => {
    setAppState({
      ...appState,
      players: [
        ...players.map((playerItem) =>
          playerItem.id === id
            ? { ...playerItem, name: val }
            : { ...playerItem }
        )
      ]
    })
  }

  const submitNewPlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!newPlayer.trim()) {
      return
    }

    const newId = (players.slice(-1)[0]?.id || 0) + 1

    setAppState({
      ...appState,
      players: [...players, { id: newId, name: newPlayer.trim() }]
    })
    setNewPlayer('')
  }

  const removePlayer = (id: number) => {
    setAppState({
      ...appState,
      players: [...players.filter((playerItem) => playerItem.id !== id)]
    })
  }

  const revealPlayerRole = (id: number) => {
    const player = players.find((playerItem) => id === playerItem.id)

    setAppState({
      ...appState,
      players: [
        ...players.map((playerItem) =>
          playerItem.id === id
            ? { ...playerItem, hasSeenRole: true }
            : { ...playerItem }
        )
      ]
    })

    alert(
      `Lugar: ${player?.role === 'Espião' ? '???' : place.title}\nPapel: ${
        player?.role
      }`
    )
  }

  const newGame = () => {
    const currentPossiblePlaces = possiblePlaces.filter(
      (possiblePlaceItem) => possiblePlaceItem.checked
    )

    const currentPlace: PlacesProps = {
      ...currentPossiblePlaces[
        Math.floor(Math.random() * currentPossiblePlaces.length)
      ]
    }

    const newPlayers = [
      ...players.map((playerItem) => ({
        ...playerItem,
        role: '',
        hasSeenRole: false
      }))
    ]

    for (let i = 0; i < spiesQuantity; i++) {
      while (true) {
        const playerKey = Math.floor(Math.random() * newPlayers.length)

        if (newPlayers[playerKey].role !== 'Espião') {
          newPlayers[playerKey].role = 'Espião'
          break
        }
      }
    }

    let newPossibleRoles = [...currentPlace.roles]

    for (let i = 0; i < newPlayers.length; i++) {
      const player = newPlayers[i]

      if (player.role !== 'Espião') {
        const role =
          newPossibleRoles[Math.floor(Math.random() * newPossibleRoles.length)]

        if (role.isUnique) {
          newPossibleRoles = [
            ...newPossibleRoles.filter(
              (possibleRoleItem) => possibleRoleItem.id !== role.id
            )
          ]
        }

        newPlayers[i].role = role.title
      }
    }

    setAppState({
      place: { ...currentPlace },
      players: [...newPlayers]
    })
  }

  useEffect(() => {
    setPossiblePlaces([
      ...PLACES.map((placeItem) => ({ ...placeItem, checked: true }))
    ])
  }, [])

  return (
    <Styled.HomeTemplate>
      <Styled.Participants>
        <TextAtom fs="24px" fw={500}>
          Jogar Spyfall!
        </TextAtom>

        <TextAtom lh={1.5} fw={500}>
          Insira o nome de todos os jogadores:
        </TextAtom>

        <Styled.ParticipantsList>
          {players?.map((playerItem, playerKey) => (
            <Styled.PlayerItem key={playerItem.id}>
              <span>{playerKey + 1}:</span>

              <FieldAtom
                id={`${playerItem.id}`}
                value={playerItem.name}
                onChange={(e) =>
                  changeCurrentPlayer(e.currentTarget.value, playerItem.id)
                }
                placeholder="Nome do jogador"
              />

              <ButtonAtom onClick={() => removePlayer(playerItem.id)}>
                <Trash />
              </ButtonAtom>
            </Styled.PlayerItem>
          ))}

          <form onSubmit={submitNewPlayer}>
            <Styled.PlayerItem>
              <span>{players.length + 1}:</span>

              <div>
                <FieldAtom
                  id="new-player"
                  placeholder="Nome do jogador"
                  onChange={changeNewPlayerName}
                  value={newPlayer}
                />
              </div>

              <ButtonAtom type="submit">
                <Plus />
              </ButtonAtom>
            </Styled.PlayerItem>
          </form>
        </Styled.ParticipantsList>
      </Styled.Participants>

      <Styled.NewGame>
        <TextAtom fw={500}>Configurações de nova partida</TextAtom>

        <FieldAtom
          id="spiesQuantity"
          type="number"
          placeholder="Número de espiões"
          label="Número de espiões:"
          value={spiesQuantity}
          onChange={changeSpiesQuantity}
        />

        <Styled.Places>
          <TextAtom fs="12px">Possíveis lugares:</TextAtom>

          <Styled.PlacesList>
            {possiblePlaces.map((placeItem) => (
              <Styled.PlaceItem key={placeItem.id}>
                <FieldAtom
                  type="checkbox"
                  id={placeItem.id}
                  label={placeItem.title}
                  checked={placeItem.checked}
                  onChange={changePossiblePlaces}
                />
              </Styled.PlaceItem>
            ))}
          </Styled.PlacesList>
        </Styled.Places>

        {players.length > 1 && (
          <ButtonAtom onClick={newGame}>Nova partida</ButtonAtom>
        )}
      </Styled.NewGame>

      {players.length > 1 && place.id && (
        <Styled.EnoughPlayers>
          <Styled.PlayerRoles>
            <TextAtom lh={1.5} fw={500}>
              Cada jogador clica no seu nome para revelar seu papel
            </TextAtom>

            <Styled.PlayerRolesList>
              {players?.map((playerItem, playerKey) => (
                <Styled.PlayerButton key={playerItem.id}>
                  <ButtonAtom
                    onClick={() => revealPlayerRole(playerItem.id)}
                    disabled={playerItem.hasSeenRole}
                  >
                    {`${playerKey + 1}: ${playerItem.name}`}
                  </ButtonAtom>
                </Styled.PlayerButton>
              ))}
            </Styled.PlayerRolesList>
          </Styled.PlayerRoles>
        </Styled.EnoughPlayers>
      )}
    </Styled.HomeTemplate>
  )
}
