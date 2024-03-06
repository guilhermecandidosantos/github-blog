import { useContext } from 'react'
import { FormContainer, FormTitle } from './styles'
import { IssuesContext } from '../../context/IssuesContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  search: z.string(),
})

type SchemaType = z.infer<typeof schema>

export function Form() {
  const { issues, searchIssues } = useContext(IssuesContext)
  const { register, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  })

  function handleSubmitSearch(data: SchemaType) {
    searchIssues(data.search)
  }

  return (
    <FormContainer>
      <FormTitle>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </FormTitle>
      <form onSubmit={handleSubmit(handleSubmitSearch)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </form>
    </FormContainer>
  )
}
