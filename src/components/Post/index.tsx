import { PostContainer, PostContent, PostTitleContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostTitleContainer>
        <h1>JavaScript data types and data structures</h1>
        <span>Há 1 dia</span>
      </PostTitleContainer>
      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. Thes...
      </PostContent>
    </PostContainer>
  )
}
