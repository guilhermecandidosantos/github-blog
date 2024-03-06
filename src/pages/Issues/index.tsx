import { NavLink, useParams } from 'react-router-dom'
import {
  IssuesContainer,
  IssuesContent,
  IssuesHeader,
  IssuesLinkHeader,
  IssuesTitle,
} from './styles'
import githubImg from '../../assets/github.svg'
import calendarImg from '../../assets/calendar.svg'
import chevronLeftImg from '../../assets/chevron-left.svg'
import { useContext } from 'react'
import { IssuesContext } from '../../context/IssuesContext'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export function Issues() {
  const { issues } = useContext(IssuesContext)
  const { id } = useParams()

  const issue = issues.find((issue) => issue.id === Number(id))

  const date = formatDistanceToNow(new Date(issue!.createdAt), { locale: ptBR })

  return (
    <IssuesContainer>
      <IssuesHeader>
        <IssuesLinkHeader>
          <NavLink to="/">Voltar</NavLink>
          <a href={issue?.issueUrl}>VER NO GITHUB</a>
        </IssuesLinkHeader>
        <IssuesTitle>
          <p>JavaScript data types and data structures</p>
          <div>
            <a href={issue?.githubUrl}>
              <img src={githubImg} alt="" />
              {issue?.login}
            </a>
            <span>
              <img src={calendarImg} alt="" />
              {date}
            </span>
            <span>
              <img src={chevronLeftImg} alt="" />
              {issue?.comments} comentários
            </span>
          </div>
        </IssuesTitle>
      </IssuesHeader>

      <IssuesContent>
        <p>
          <Markdown rehypePlugins={[rehypeRaw]}>{issue?.content}</Markdown>
        </p>
      </IssuesContent>
    </IssuesContainer>
  )
}
