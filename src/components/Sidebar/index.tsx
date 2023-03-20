import Image from 'next/image'
import { Binoculars, House, SignIn, SignOut, User } from 'phosphor-react'
import {
  LogoContainer,
  SidebarContainer,
  UserContainer,
  UserInfoButtonBox,
} from './styles'
import wiseAppLogo from '../../assets/book-heart.svg'
import { ListElement } from './components/ListElement'
import { AvatarWithGradient } from '../AvatarWithGradient'

interface SidebarProps {
  page: string
  isLoggedIn: boolean
}

export function Sidebar({ page, isLoggedIn }: SidebarProps) {
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
        {isLoggedIn === true ? (
          <UserInfoButtonBox>
            <AvatarWithGradient imgWidth={30} imgHeight={30} imgSize="sm" />
            <button>
              Cristofer
              <SignOut size={20} weight="bold" />
            </button>
          </UserInfoButtonBox>
        ) : (
          <button>
            Fazer login
            <SignIn size={20} weight="bold" />
          </button>
        )}

        {/* <button>
          Fazer login
          <SignIn size={20} weight="bold" />
        </button> */}
      </UserContainer>
    </SidebarContainer>
  )
}
