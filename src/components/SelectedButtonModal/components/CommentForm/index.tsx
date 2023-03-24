import { AvatarWithGradient } from '@/src/components/AvatarWithGradient'
import { RatingButton } from '@/src/components/RatingButton'
import { BookContext } from '@/src/contexts/BookContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { Nunito } from '@next/font/google'
import { Check, X } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonsBox, CommentFormBox, Form, Header, UserInfoBox } from './styles'

const nunito = Nunito({
  subsets: ['latin'],
})

const commentFormSchema = z.object({
  comment: z.string(),
})

type CommentFormInput = z.infer<typeof commentFormSchema>

interface CommentFormProps {
  handleHideCommentForm: () => void
}

export function CommentForm({ handleHideCommentForm }: CommentFormProps) {
  const { register, handleSubmit } = useForm<CommentFormInput>({
    resolver: zodResolver(commentFormSchema),
  })

  const { bookCommentRating } = useContext(BookContext)

  function handleMakeAComment(data: CommentFormInput) {
    console.log({
      user: 'testUser',
      comment: data.comment,
      bookRating: bookCommentRating,
    })
    handleHideCommentForm()
  }

  return (
    <CommentFormBox>
      <Header>
        <UserInfoBox>
          <AvatarWithGradient imgHeight={45} imgWidth={45} imgSize={'md'} />
          <span>Cristofer Rosser</span>
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
