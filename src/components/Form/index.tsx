import { FormContainer, FormTitle } from './styles'

export function Form() {
  return (
    <FormContainer>
      <FormTitle>
        <p>Publicações</p>
        <span>6 publicações</span>
      </FormTitle>
      <form action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </FormContainer>
  )
}
