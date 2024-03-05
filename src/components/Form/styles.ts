import styled from 'styled-components'
import { texts } from '../../styles/texts'

export const FormContainer = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  form {
    display: flex;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
      color: ${(props) => props.theme['base-text']};
      ${texts.textM};

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const FormTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > p {
    ${texts.titleS};
    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    ${texts.textS};
    color: ${(props) => props.theme['base-span']};
  }
`
