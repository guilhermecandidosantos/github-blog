import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const InfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  width: 100%;
  margin-top: -6rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  > img {
    min-width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > h1 {
    ${texts.titleL};
    color: ${(props) => props.theme['base-title']};
  }

  > a {
    ${texts.link};
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    height: 1.5rem;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-color 0.3s;
    }

    > img {
      width: 12px;
      height: 12px;
    }
  }
`

export const ProfileDescription = styled.p`
  ${texts.textM};
  color: ${(props) => props.theme['base-text']};
`

export const ProfileLinks = styled.div`
  display: flex;

  > a {
    ${texts.textM};
    color: ${(props) => props.theme['base-subtitle']};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > img {
      width: 18px;
      height: 18px;
    }
  }
`
