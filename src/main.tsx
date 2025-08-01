import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme='light'>
      <App />
    </MantineProvider>
  </StrictMode>,
)
