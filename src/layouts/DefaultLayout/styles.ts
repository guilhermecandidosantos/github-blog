import styled from 'styled-components'
import backgroundHeader from '../../assets/background-header.svg'

export const HeaderContainer = styled.div`
  width: 100vw;
`

export const HeaderContent = styled.header`
  width: 100vw;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  padding: 4rem;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;

  > img {
    width: 9.2rem;
    height: 6.126rem;
  }
`
