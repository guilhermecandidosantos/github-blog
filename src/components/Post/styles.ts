import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const PostContainer = styled.div`
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`

export const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    ${texts.titleM};
    max-width: 17rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    ${texts.textS};
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContent = styled.p``
