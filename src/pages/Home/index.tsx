import { Form } from '../../components/Form'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { HomeContainer, Posts } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Form />
      <Posts>
        <Post />
        <Post />
        <Post />
        <Post />
      </Posts>
    </HomeContainer>
  )
}
