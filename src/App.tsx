import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
