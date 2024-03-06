import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

interface IssuesContextProviderProps {
  children: ReactNode
}

export interface Issues {
  id: number
  title: number
  createdAt: Date
  comments: number
  issueUrl: string
  content: string
  login: string
  githubUrl: string
}

interface IssuesResponse {
  id: number
  title: number
  created_at: string
  comments: number
  html_url: string
  body: string
  user: { html_url: string; login: string }
}

interface IssuesContextType {
  issues: Issues[]
  searchIssues: (search: string) => void
}
export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [search, setSearch] = useState('')

  function searchIssues(search: string) {
    setSearch(search)
  }

  const fetchIssues = useCallback(async (url: string) => {
    const response = (await api.get(`${url}`)).data.items as IssuesResponse[]

    const data = response.map((item) => {
      return {
        id: item.id,
        title: item.title,
        createdAt: new Date(item.created_at),
        comments: item.comments,
        issueUrl: item.html_url,
        content: item.body,
        login: item.user.login,
        githubUrl: item.user.html_url,
      }
    })

    setIssues(data)
  }, [])

  useEffect(() => {
    let newSearch = search.replace(' ', '%20')
    if (search.length > 0) {
      newSearch = newSearch + '%20'
    }
    fetchIssues(
      `/search/issues?q=${newSearch}repo:guilhermecandidosantos/github-blog`,
    )
  }, [fetchIssues, search])

  return (
    <IssuesContext.Provider value={{ issues, searchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
