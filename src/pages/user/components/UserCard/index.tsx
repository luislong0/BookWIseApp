import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { UserContext } from '@/src/contexts/UserContext'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'
import { useContext } from 'react'
import { UserBookInfo } from './components/UserBookInfo'
import {
  BooksInfoBox,
  Info,
  Separator,
  UserCardContainer,
  UserInfoBox,
} from './styles'

export function UserCard() {
  const session = useSession()
  console.log(session.data?.user!.name)

  const { loggedUserBookInfo, loggedUser } = useContext(UserContext)

  return (
    <UserCardContainer>
      <UserInfoBox>
        <AvatarWithGradient
          url={session.data?.user!.image}
          imgSize="lg"
          imgHeight={72}
          imgWidth={72}
        />
        <Info>
          <span>{session.data?.user!.name}</span>
          {loggedUser!.created_at! !== undefined && (
            <span>
              {`Desde ${String(
                format(new Date(loggedUser!.created_at!), 'yyyy'),
              )}`}
            </span>
          )}
        </Info>
      </UserInfoBox>
      <Separator />
      <BooksInfoBox>
        <UserBookInfo
          image={<BookOpen size={32} />}
          title={String(loggedUserBookInfo.pagesRead)}
          subtitle={'Páginas lidas'}
        />
        <UserBookInfo
          image={<Books size={32} />}
          title={String(loggedUserBookInfo.booksCount)}
          subtitle={'Livros avaliados'}
        />
        <UserBookInfo
          image={<UserList size={32} />}
          title={String(loggedUserBookInfo.authorQuantity)}
          subtitle={'Autores lidos'}
        />
        <UserBookInfo
          image={<BookmarkSimple size={32} />}
          title={loggedUserBookInfo.mostCategory}
          subtitle={'Categoria mais alta'}
        />
      </BooksInfoBox>
    </UserCardContainer>
  )
}
