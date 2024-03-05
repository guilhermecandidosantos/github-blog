import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Issues } from './pages/Issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issues/:id" element={<Issues />} />
      </Route>
    </Routes>
  )
}
