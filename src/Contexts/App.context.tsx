import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

import { PlacesProps, PlayerProps } from '@/Utils/Props'

const INITIAL_STATE = {
  players: [],
  place: {
    id: '',
    title: '',
    roles: []
  }
}

type AppProps = {
  players: Array<PlayerProps>
  place: PlacesProps
}

export const AppContext = createContext<{
  appState: AppProps
  setAppState: Dispatch<any>
}>({
  appState: { ...INITIAL_STATE },
  setAppState: () => {}
})

export const AppProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [appState, setAppState] = useState<AppProps>({
    ...INITIAL_STATE
  })

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      <>{children}</>
    </AppContext.Provider>
  )
}
