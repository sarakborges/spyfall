import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from '@/Contexts'

import { HomePage } from '@/Components/Pages'

import * as Styled from '@/Assets/Styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Styled.GlobalStyle />

      <HomePage />
    </AppProvider>
  </React.StrictMode>
)
