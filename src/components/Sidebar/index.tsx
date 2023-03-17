import { SignIn } from 'phosphor-react'
import { SidebarContainer, UserContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <UserContainer>
        <button>
          Fazer login
          <SignIn size={20} />
        </button>
      </UserContainer>
    </SidebarContainer>
  )
}
