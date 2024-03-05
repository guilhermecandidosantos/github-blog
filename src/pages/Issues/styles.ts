import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const IssuesContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  margin-top: -6rem;
`
export const IssuesHeader = styled.header`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
`

export const IssuesLinkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  > a {
    ${texts.link};
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const IssuesTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    ${texts.titleL};
    color: ${(props) => props.theme['base-title']};
  }

  > div {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    img {
      width: 18px;
      height: 18px;
    }

    > a {
      text-decoration: none;
    }

    > a,
    span {
      color: ${(props) => props.theme['base-span']};
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1;
    }
  }
`

export const IssuesContent = styled.main`
  padding: 2.5rem 2rem;
`
