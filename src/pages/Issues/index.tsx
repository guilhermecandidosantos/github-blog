import { NavLink } from 'react-router-dom'
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

export function Issues() {
  return (
    <IssuesContainer>
      <IssuesHeader>
        <IssuesLinkHeader>
          <NavLink to="/">Voltar</NavLink>
          <a href="">VER NO GITHUB</a>
        </IssuesLinkHeader>
        <IssuesTitle>
          <p>JavaScript data types and data structures</p>
          <div>
            <a href="">
              <img src={githubImg} alt="" />
              guilhermecandidosantos
            </a>
            <span>
              <img src={calendarImg} alt="" />
              Há 1 dia
            </span>
            <span>
              <img src={chevronLeftImg} alt="" />5 comentários
            </span>
          </div>
        </IssuesTitle>
      </IssuesHeader>

      <IssuesContent>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quaerat
          sapiente ipsam saepe! Dicta error, corporis similique quae voluptas
          veritatis, explicabo ea eligendi nam consectetur quam natus ullam
          perferendis deleniti!
        </p>
      </IssuesContent>
    </IssuesContainer>
  )
}
