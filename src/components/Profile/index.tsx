import {
  InfoContainer,
  ProfileContainer,
  ProfileDescription,
  ProfileLinks,
  ProfileTitle,
} from './styles'
import arrowUpRight from '../../assets/arrow-up-right.svg'
import githubIcon from '../../assets//github.svg'
import { ProfileData } from '../../pages/Home'

interface ProfileProps {
  dataProfile: ProfileData
}

export function Profile({ dataProfile }: ProfileProps) {
  return (
    <InfoContainer>
      <img src={dataProfile.avatarUrl} alt="" />
      <ProfileContainer>
        <ProfileTitle>
          <h1>{dataProfile.name}</h1>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GITBHUB
            <img src={arrowUpRight} alt="" />
          </a>
        </ProfileTitle>
        <ProfileDescription>{dataProfile.bio}</ProfileDescription>
        <ProfileLinks>
          <a href={dataProfile.githubUrl}>
            <img src={githubIcon} alt="" />
            {dataProfile.login}
          </a>
        </ProfileLinks>
      </ProfileContainer>
    </InfoContainer>
  )
}
