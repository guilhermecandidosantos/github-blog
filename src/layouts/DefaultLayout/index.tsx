import { Outlet } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent } from './styles'

export function DefaultLayout() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
      <Outlet />
    </HeaderContainer>
  )
}
