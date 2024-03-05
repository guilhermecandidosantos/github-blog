import {
  InfoContainer,
  ProfileContainer,
  ProfileDescription,
  ProfileLinks,
  ProfileTitle,
} from './styles'
import arrowUpRight from '../../assets/arrow-up-right.svg'
import githubIcon from '../../assets//github.svg'

export function Profile() {
  return (
    <InfoContainer>
      <img
        src="https://avatars.githubusercontent.com/u/54542736?s=400&u=c8e4f150bc854fc60429ea2d9fa884d52f9e22a8&v=4"
        alt=""
      />
      <ProfileContainer>
        <ProfileTitle>
          <h1>Guilherme Santos</h1>
          <a href="">
            GITBHUB
            <img src={arrowUpRight} alt="" />
          </a>
        </ProfileTitle>
        <ProfileDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab
          atque facilis illo, nam architecto consequatur fugiat magnam illum
        </ProfileDescription>
        <ProfileLinks>
          <a href="">
            <img src={githubIcon} alt="" />
            guilhermecandidosantos
          </a>
        </ProfileLinks>
      </ProfileContainer>
    </InfoContainer>
  )
}
