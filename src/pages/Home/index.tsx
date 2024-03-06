import { useCallback, useContext, useEffect, useState } from 'react'
import { Form } from '../../components/Form'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { HomeContainer, Posts } from './styles'
import { api } from '../../lib/api'
import { IssuesContext } from '../../context/IssuesContext'

export interface ProfileData {
  name: string
  avatarUrl: string
  githubUrl: string
  bio: string
  login: string
}

export function Home() {
  const { issues } = useContext(IssuesContext)
  const [profile, setProfile] = useState<ProfileData>({} as ProfileData)

  const fetchProfile = useCallback(async (url: string) => {
    const response = await api.get(`${url}`)

    const data = {
      name: response.data.name,
      avatarUrl: response.data.avatar_url,
      githubUrl: response.data.html_url,
      bio: response.data.bio,
      login: response.data.login,
    } as ProfileData

    setProfile(data)
  }, [])

  useEffect(() => {
    fetchProfile('/users/guilhermecandidosantos')
  }, [fetchProfile])

  return (
    <HomeContainer>
      <Profile dataProfile={profile} />
      <Form />
      <Posts>
        {issues.map((issue) => {
          return <Post key={issue.id} issue={issue} />
        })}
      </Posts>
    </HomeContainer>
  )
}
