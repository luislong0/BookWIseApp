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
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { getLimitedText } from '@/src/utils/getLimitedText'

interface SidebarProps {
  page: string
  isLoggedIn: boolean
}

export function Sidebar({ page, isLoggedIn }: SidebarProps) {
  const session = useSession()
  const username = getLimitedText({
    text: session.data?.user!.name ?? '',
    letterLimit: 12,
  })

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
            href={'/home'}
            activatedStatus={'true'}
          />
        ) : (
          <ListElement
            icon={<House size={24} weight="bold" />}
            description={'Início'}
            href={'/home'}
            activatedStatus={'false'}
          />
        )}
        {page === 'explore' ? (
          <ListElement
            icon={<Binoculars size={24} weight="bold" />}
            description={'Explorar'}
            href={'/explore'}
            activatedStatus={'true'}
          />
        ) : (
          <ListElement
            icon={<Binoculars size={24} weight="bold" />}
            description={'Explorar'}
            href={'/explore'}
            activatedStatus={'false'}
          />
        )}
        {isLoggedIn === true && page === 'user' ? (
          <ListElement
            icon={<User size={24} weight="bold" />}
            description={'Perfil'}
            href={'/user'}
            activatedStatus={'true'}
          />
        ) : (
          <></>
        )}

        {session.data !== null && page !== 'user' ? (
          <ListElement
            icon={<User size={24} weight="bold" />}
            description={'Perfil'}
            href={'/user'}
            activatedStatus={'false'}
          />
        ) : (
          <></>
        )}
      </ul>

      <UserContainer>
        {session.data !== null ? (
          <UserInfoButtonBox>
            <AvatarWithGradient
              url={session.data?.user!.image}
              imgWidth={30}
              imgHeight={30}
              imgSize="sm"
            />
            <Link href={'/user'}>{username.text!}</Link>
            <button>
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
