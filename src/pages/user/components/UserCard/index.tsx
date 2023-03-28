import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { useSession } from 'next-auth/react'
import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'
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
          <span>membro desde 2019</span>
        </Info>
      </UserInfoBox>
      <Separator />
      <BooksInfoBox>
        <UserBookInfo
          image={<BookOpen size={32} />}
          title={'3853'}
          subtitle={'Páginas lidas'}
        />
        <UserBookInfo
          image={<Books size={32} />}
          title={'10'}
          subtitle={'Livros avaliados'}
        />
        <UserBookInfo
          image={<UserList size={32} />}
          title={'8'}
          subtitle={'Autores lidos'}
        />
        <UserBookInfo
          image={<BookmarkSimple size={32} />}
          title={'Computação'}
          subtitle={'Categoria mais alta'}
        />
      </BooksInfoBox>
    </UserCardContainer>
  )
}
