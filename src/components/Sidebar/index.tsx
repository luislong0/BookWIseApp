import Image from 'next/image'
import { Binoculars, House, SignIn, User } from 'phosphor-react'
import { LogoContainer, SidebarContainer, UserContainer } from './styles'
import wiseAppLogo from '../../assets/book-heart.svg'
import { ListElement } from './components/ListElement'

interface SidebarProps {
  page: string
}

export function Sidebar({ page }: SidebarProps) {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Image src={wiseAppLogo} alt="logo" />
        <span>BookWise</span>
      </LogoContainer>

      <ul>
        {page === 'home' ? (
          <ListElement
            icon={<House size={24} weight="bold" />}
            description={'Início'}
            activatedStatus={'true'}
          />
        ) : (
          <ListElement
            icon={<House size={24} weight="bold" />}
            description={'Início'}
            activatedStatus={'false'}
          />
        )}
        <ListElement
          icon={<Binoculars size={24} weight="bold" />}
          description={'Explorar'}
          activatedStatus={'false'}
        />
        <ListElement
          icon={<User size={24} weight="bold" />}
          description={'Perfil'}
          activatedStatus={'false'}
        />
      </ul>

      <UserContainer>
        <button>
          Fazer login
          <SignIn size={20} weight="bold" />
        </button>
      </UserContainer>
    </SidebarContainer>
  )
}
