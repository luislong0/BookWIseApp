import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { RatingButton } from '@/src/components/RatingButton'
import { BookContext } from '@/src/contexts/BookContext'
import { UserContext } from '@/src/contexts/UserContext'
import { api } from '@/src/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nunito } from '@next/font/google'
import { useSession } from 'next-auth/react'
import { Check, X } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonsBox, CommentFormBox, Form, Header, UserInfoBox } from './styles'
import { successNotification } from '@/src/components/Notifiers/Success'
import { errorNotification } from '@/src/components/Notifiers/Error'

const nunito = Nunito({
  subsets: ['latin'],
})

const commentFormSchema = z.object({
  comment: z.string(),
})

type CommentFormInput = z.infer<typeof commentFormSchema>

interface CommentFormProps {
  handleHideCommentForm: () => void
  bookId: string
}

export function CommentForm({
  handleHideCommentForm,
  bookId,
}: CommentFormProps) {
  const { register, handleSubmit } = useForm<CommentFormInput>({
    resolver: zodResolver(commentFormSchema),
  })
  const session = useSession()

  const { bookCommentRating, handleUpdateComments } = useContext(BookContext)
  const { loggedUser } = useContext(UserContext)

  async function handleMakeAComment(data: CommentFormInput) {
    handleHideCommentForm()

    try {
      await api.post('/avaliation', {
        userId: loggedUser.id,
        bookId,
        comment: data.comment,
        ratingNumber: bookCommentRating,
      })
      handleUpdateComments()
      successNotification('Livro avaliado com sucesso!!')
    } catch (err) {
      console.error(err)
      errorNotification(String(err))
    }
  }

  return (
    <CommentFormBox>
      <Header>
        <UserInfoBox>
          <AvatarWithGradient
            imgHeight={44}
            imgWidth={44}
            imgSize={'md'}
            url={session.data?.user!.image}
          />
          <span>{session.data?.user!.name}</span>
        </UserInfoBox>
        <RatingButton />
      </Header>
      <Form onSubmit={handleSubmit(handleMakeAComment)}>
        <textarea
          className={nunito.className}
          placeholder="escreva sua avaliação"
          maxLength={450}
          {...register('comment')}
        />
        <ButtonsBox>
          <button onClick={handleHideCommentForm}>
            <X size={24} />
          </button>
          <button type="submit">
            <Check size={24} />
          </button>
        </ButtonsBox>
      </Form>
    </CommentFormBox>
  )
}
