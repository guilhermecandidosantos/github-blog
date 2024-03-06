import { formatDistanceToNow } from 'date-fns'
import { Issues } from '../../context/IssuesContext'
import { PostContainer, PostContent, PostTitleContainer } from './styles'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface PostProps {
  issue: Issues
}

export function Post({ issue }: PostProps) {
  const date = formatDistanceToNow(issue.createdAt, {
    addSuffix: true,
    locale: ptBR,
  })

  const navigate = useNavigate()

  function handleViewIssueComplete() {
    navigate(`/issues/${issue.id}`)
  }

  return (
    <PostContainer onClick={handleViewIssueComplete}>
      <PostTitleContainer>
        <h1>{issue.title}</h1>
        <span>{date}</span>
      </PostTitleContainer>
      <PostContent>
        <Markdown rehypePlugins={[rehypeRaw]}>
          {issue.content.slice(0, 228) + '...'}
        </Markdown>
      </PostContent>
    </PostContainer>
  )
}
